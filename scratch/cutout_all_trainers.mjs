import sharp from 'sharp';
import fs from 'fs';

async function makeTransparent(filename, bgToleranceCheck) {
  const filePath = `public/courses/images/trainer/${filename}`;
  const img = sharp(filePath);
  const meta = await img.metadata();
  const { width, height } = meta;
  const raw = await img.ensureAlpha().raw().toBuffer();

  const visited = new Uint8Array(width * height);
  const queue = [];

  for (let x = 0; x < width; x++) {
    if (bgToleranceCheck(raw, x)) {
      visited[x] = 1;
      queue.push(x);
    }
  }

  for (let y = 0; y < Math.floor(height * 0.75); y++) {
    const l = y * width;
    if (!visited[l] && bgToleranceCheck(raw, l)) {
      visited[l] = 1;
      queue.push(l);
    }
    const r = y * width + (width - 1);
    if (!visited[r] && bgToleranceCheck(raw, r)) {
      visited[r] = 1;
      queue.push(r);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    raw[curr * 4 + 3] = 0;

    const cx = curr % width;
    const cy = Math.floor(curr / width);
    const nbs = [
      cy > 0 ? (cy - 1) * width + cx : -1,
      cy < height - 1 ? (cy + 1) * width + cx : -1,
      cx > 0 ? cy * width + (cx - 1) : -1,
      cx < width - 1 ? cy * width + (cx + 1) : -1
    ];

    for (const n of nbs) {
      if (n !== -1 && !visited[n]) {
        visited[n] = 1;
        if (bgToleranceCheck(raw, n)) {
          queue.push(n);
        } else {
          // edge softening
          const r = raw[n * 4];
          const g = raw[n * 4 + 1];
          const b = raw[n * 4 + 2];
          const diff = Math.abs(r - g) + Math.abs(g - b);
          if (diff < 20) {
            raw[n * 4 + 3] = Math.round(raw[n * 4 + 3] * 0.5);
          }
        }
      }
    }
  }

  console.log(`${filename}: flooded ${queue.length} pixels out of ${width * height} (${Math.round(queue.length / (width * height) * 100)}%)`);
  if (queue.length > 50000) {
    await sharp(raw, { raw: { width, height, channels: 4 } }).png().toFile(filePath + '.tmp.png');
    fs.renameSync(filePath + '.tmp.png', filePath);
    console.log(`Saved transparent ${filename}`);
  }
}

async function run() {
  // Govind: studio gray
  await makeTransparent('Govind.png', (raw, idx) => {
    const r = raw[idx * 4];
    const g = raw[idx * 4 + 1];
    const b = raw[idx * 4 + 2];
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    return diff < 20 && r > 40 && r < 140 && g > 40 && g < 140 && b > 35 && b < 135;
  });

  // shagun2: studio gray
  await makeTransparent('shagun2.png', (raw, idx) => {
    const r = raw[idx * 4];
    const g = raw[idx * 4 + 1];
    const b = raw[idx * 4 + 2];
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    return diff < 20 && r > 60 && r < 160 && g > 60 && g < 160 && b > 55 && b < 155;
  });

  // deepanshu3: studio gray
  await makeTransparent('deepanshu3.png', (raw, idx) => {
    const r = raw[idx * 4];
    const g = raw[idx * 4 + 1];
    const b = raw[idx * 4 + 2];
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    return diff < 22 && r > 60 && r < 170 && g > 60 && g < 170 && b > 55 && b < 165;
  });

  // Kaushal: studio warm gray/beige
  await makeTransparent('Kaushal.png', (raw, idx) => {
    const r = raw[idx * 4];
    const g = raw[idx * 4 + 1];
    const b = raw[idx * 4 + 2];
    return r > 120 && g > 90 && b > 60 && (r - b) < 90 && (r - g) < 50;
  });

  console.log('Done transparent cutouts!');
}

run();
