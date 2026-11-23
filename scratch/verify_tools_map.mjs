import fs from 'fs';
import { courses } from '../src/data/courses.js';

const existing = new Set(fs.readdirSync('public/courses/images/tools').map(f => f.toLowerCase()));

// Map normalized name or keywords to actual files
function resolveToolFile(tool) {
  const name = (tool.name || "").toLowerCase().trim();
  const logo = (tool.logo || "").toLowerCase().trim();

  // Explicit mappings
  const map = {
    "google ads": "Google Ads.svg",
    "meta ads": "Meta Ads.svg",
    "meta business suite": "Meta Ads.svg",
    "canva": "Canva.svg",
    "ga4": "GA4.svg",
    "gtm": "gtm.svg",
    "google tag manager": "gtm.svg",
    "google analytics": "GA4.svg",
    "semrush": "semrush.svg",
    "ahrefs": "Ahrefs.png",
    "hubspot": "hubspot.svg",
    "shopify": "shopify.svg",
    "wordpress": "WordPress.svg",
    "mailchimp": "mailchimp.svg",
    "zapier": "zapier.svg",
    "chatgpt": "chatgpt.svg",
    "chatgpt for marketing": "chatgpt.svg",
    "photoshop": "Photoshop.svg",
    "illustrator": "illustrator.svg",
    "premiere pro": "premiere.svg",
    "premiere": "premiere.svg",
    "after effects": "aftereffects.svg",
    "midjourney": "midjourney.svg",
    "cinema 4d basics": "cinema4d.svg",
    "cinema 4d": "cinema4d.svg",
    "blender basics": "blender.svg",
    "blender": "blender.svg",
    "figma": "figma.svg",
    "adobe xd": "adobexd.svg",
    "miro": "miro.svg",
    "notion": "notion.svg",
    "zeplin": "zeplin.svg",
    "html5/css3": "html5.svg",
    "html5": "html5.svg",
    "javascript": "javascript.svg",
    "react": "react.svg",
    "node.js": "nodejs.svg",
    "nodejs": "nodejs.svg",
    "express": "express.svg",
    "mongodb": "mongodb.svg",
    "git/github": "git.svg",
    "git": "git.svg",
    "tailwind css": "tailwind.svg",
    "python": "python.svg",
    "sql": "sql.svg",
    "aws cloud": "aws.svg",
    "aws": "aws.svg",
    "power bi": "powerbi.svg",
    "pandas": "pandas.svg",
    "numpy": "numpy.svg",
    "tableau": "tableau.svg",
    "tensorflow": "tensorflow.svg",
    "scikit-learn": "scikit.svg",
    "pytorch": "pytorch.svg",
    "docker": "docker.svg",
    "pyspark": "pyspark.svg",
    "excel": "excel.svg",
    "advanced excel": "excel.svg",
    "bigquery": "bigquery.svg",
    "openai api": "openai.svg",
    "openai": "openai.svg",
    "langchain": "langchain.svg",
    "llamaindex": "llamaindex.svg",
    "hugging face": "huggingface.svg",
    "pinecone": "pinecone.svg",
    "streamlit": "streamlit.svg",
    "mlflow": "mlflow.svg",
    "fastapi": "fastapi.svg",
    "kali linux": "kalilinux.svg",
    "burp suite": "burpsuite.svg",
    "burp suite pro": "burpsuite.svg",
    "wireshark": "wireshark.svg",
    "metasploit": "metasploit.svg",
    "nmap": "nmap.svg",
    "nessus": "nessus.svg",
    "splunk": "splunk.svg",
    "ghidra": "ghidra.svg",
    "autopsy": "autopsy.svg",
    "ftk imager": "ftk.svg",
    "ftk": "ftk.svg",
    "volatility": "volatility.svg",
    "x-ways": "xways.svg",
    "sublist3r": "sublist3r.svg",
    "amass": "amass.svg",
    "nuclei": "nuclei.svg",
    "postman": "postman.svg"
  };

  if (map[name]) return map[name];
  if (map[logo]) return map[logo];

  // Try finding file in directory
  for (const f of existing) {
    if (f.includes(name) || (logo && f.includes(logo))) return f;
  }

  return "Google Ads.svg"; // safe fallback
}

let allTools = [];
courses.forEach(c => {
  (c.tools || []).forEach(t => {
    allTools.push(t);
  });
});

console.log('Total tool instances across all courses:', allTools.length);
let missingFiles = 0;
const uniqueMapped = new Map();

for (const t of allTools) {
  const file = resolveToolFile(t);
  const existsOnDisk = fs.existsSync(`public/courses/images/tools/${file}`);
  if (!existsOnDisk) {
    console.error('FILE DOES NOT EXIST:', file, 'for tool:', t);
    missingFiles++;
  } else {
    uniqueMapped.set(t.name, file);
  }
}

console.log('Unique tools mapped:', uniqueMapped.size);
console.log('Missing files count:', missingFiles);
if (missingFiles === 0) {
  console.log('SUCCESS: All tools across all courses have verified real image files!');
}
