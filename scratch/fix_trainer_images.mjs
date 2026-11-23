import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. First, copy public/Gulshan Sir Image.png to public/courses/images/trainer/Gulshan.png
const gulshanSource = 'public/Gulshan Sir Image.png';
const gulshanTarget = 'public/courses/images/trainer/Gulshan.png';
if (fs.existsSync(gulshanSource)) {
  fs.copyFileSync(gulshanSource, gulshanTarget);
  console.log('Copied official transparent Gulshan Sir Image.png to Gulshan.png');
}

// 2. Process all trainer images in public/courses/images/trainer/
// If an image has white or near-white background, convert connected outer white pixels to transparent alpha
const trainerDir = 'public/courses/images/trainer';
const files = fs.readdirSync(trainerDir);

async function removeWhiteBackground(filePath) {
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Get raw RGBA buffer
  const raw = await image.ensureAlpha().raw().toBuffer();
  
  // Flood fill / scan from edges: any pixel that is near white (R > 235, G > 235, B > 235) connected to the outer boundary
  // Let's implement a BFS queue flood fill from all 4 boundaries (x=0, x=width-1, y=0, y=height-1)
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isNearWhite(idx) {
    const r = raw[idx * 4];
    const g = raw[idx * 4 + 1];
    const b = raw[idx * 4 + 2];
    // white or light gray background
    return r > 230 && g > 230 && b > 230;
  }

  // Seed top & bottom edges
  for (let x = 0; x < width; x++) {
    // top
    const topIdx = x;
    if (isNearWhite(topIdx)) {
      visited[topIdx] = 1;
      queue.push(topIdx);
    }
    // bottom
    const botIdx = (height - 1) * width + x;
    if (isNearWhite(botIdx)) {
      visited[botIdx] = 1;
      queue.push(botIdx);
    }
  }

  // Seed left & right edges
  for (let y = 0; y < height; y++) {
    // left
    const leftIdx = y * width;
    if (!visited[leftIdx] && isNearWhite(leftIdx)) {
      visited[leftIdx] = 1;
      queue.push(leftIdx);
    }
    // right
    const rightIdx = y * width + (width - 1);
    if (!visited[rightIdx] && isNearWhite(rightIdx)) {
      visited[rightIdx] = 1;
      queue.push(rightIdx);
    }
  }

  // Process flood fill
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    // Set alpha to 0
    raw[curr * 4 + 3] = 0;

    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // 4 neighbors
    const neighbors = [
      cy > 0 ? (cy - 1) * width + cx : -1,
      cy < height - 1 ? (cy + 1) * width + cx : -1,
      cx > 0 ? cy * width + (cx - 1) : -1,
      cx < width - 1 ? cy * width + (cx + 1) : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n]) {
        visited[n] = 1;
        if (isNearWhite(n)) {
          queue.push(n);
        } else {
          // Semi-transparent edge feathering for smooth outline
          const r = raw[n * 4];
          const g = raw[n * 4 + 1];
          const b = raw[n * 4 + 2];
          if (r > 210 && g > 210 && b > 210) {
            const brightness = (r + g + b) / 3;
            // Linear falloff
            const factor = Math.max(0, Math.min(1, (255 - brightness) / 45));
            raw[n * 4 + 3] = Math.round(raw[n * 4 + 3] * factor);
          }
        }
      }
    }
  }

  console.log(`Processed ${path.basename(filePath)}: flooded ${queue.length} background pixels out of ${width * height}`);

  // Save back as PNG with transparency
  const outPath = filePath.replace(/\.[a-zA-Z0-9]+$/, '.png');
  await sharp(raw, {
    raw: {
      width,
      height,
      channels: 4
    }
  }).png().toFile(outPath + '.tmp');

  fs.renameSync(outPath + '.tmp', outPath);
}

for (const f of files) {
  if (f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpeg') || f.endsWith('.jpg')) {
    try {
      await removeWhiteBackground(path.join(trainerDir, f));
    } catch (err) {
      console.error(`Error processing ${f}:`, err);
    }
  }
}

console.log('All trainer images processed with transparent backgrounds!');
