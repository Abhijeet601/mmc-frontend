import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, '..');
const sources = [
  { src: path.join(workspaceRoot, 'data files', 'Namita singh VC PU.jpeg'), destName: 'Namita_singh_VC_PU.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Arif Md.jpeg'), destName: 'Arif_Md.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-7-768x511.jpg'), destName: 'alumni_mmc_alumni_2023meet_7_768x511.jpg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-8-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_8_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-9-768x512.jpeg'), destName: 'alumni_mmc_alumni_2023meet_9_768x512.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-11-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_11_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-12-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_12_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-13-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_13_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-14-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_14_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-15-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_15_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-16-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_16_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-17-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_17_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-18-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_18_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-19-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_19_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-20-768x512.jpeg'), destName: 'alumni_mmc_alumni_2023meet_20_768x512.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-21-768x512.jpeg'), destName: 'alumni_mmc_alumni_2023meet_21_768x512.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-22-768x511.jpeg'), destName: 'alumni_mmc_alumni_2023meet_22_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-23-768x512.jpeg'), destName: 'alumni_mmc_alumni_2023meet_23_768x512.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-24-768x512.jpeg'), destName: 'alumni_mmc_alumni_2023meet_24_768x512.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni_2023meet-77-768x511.jpg'), destName: 'alumni_mmc_alumni_2023meet_77_768x511.jpg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_alumni2023_2-768x511.jpeg'), destName: 'alumni_mmc_alumni2023_2_768x511.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_med1.jpeg'), destName: 'alumni_mmc_med1.jpeg' },
  { src: path.join(workspaceRoot, 'data files', 'Alumini Meet', 'mmc_med2.jpeg'), destName: 'alumni_mmc_med2.jpeg' },
  // Course list images
  { src: path.join(workspaceRoot, 'data files', 'Admission', 'course-list-1.jpg'), destName: 'course-list-1.jpg' },
  { src: path.join(workspaceRoot, 'data files', 'Admission', 'course-list-2.jpg'), destName: 'course-list-2.jpg' },
  { src: path.join(workspaceRoot, 'data files', 'Admission', 'course-list-3.jpg'), destName: 'course-list-3.jpg' },
];

const destDir = path.join(workspaceRoot, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let copied = 0;
for (const item of sources) {
  const destPath = path.join(destDir, item.destName);
  if (!fs.existsSync(item.src)) {
    console.error(`Source not found: ${item.src}`);
    continue;
  }
  try {
    fs.copyFileSync(item.src, destPath);
    console.log(`Copied ${item.src} -> ${destPath}`);
    copied++;
  } catch (err) {
    console.error(`Failed to copy ${item.src}:`, err.message);
  }
}

if (copied === 0) {
  console.error('No files were copied. Ensure the source files exist in the "data files" folder.');
  process.exit(1);
}
console.log(`Done. ${copied} file(s) copied to ${destDir}`);
