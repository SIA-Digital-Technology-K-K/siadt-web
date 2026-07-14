// _mirror/media 内のダウンロード済みメディアを public/ 配下へ配置するスクリプト。
// ラスター画像 (png/jpg/jpeg/gif) は WebP に変換、SVG はコピー、
// 動画は public/videos、PDF は public/files へコピーする。元ファイル名を保持する。
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = new URL('../_mirror/media/', import.meta.url).pathname;
const IMAGES = new URL('../public/images/', import.meta.url).pathname;
const VIDEOS = new URL('../public/videos/', import.meta.url).pathname;
const FILES = new URL('../public/files/', import.meta.url).pathname;

await Promise.all([mkdir(IMAGES, { recursive: true }), mkdir(VIDEOS, { recursive: true }), mkdir(FILES, { recursive: true })]);

for (const name of await readdir(SRC)) {
  const src = path.join(SRC, name);
  const ext = path.extname(name).toLowerCase();
  const base = path.basename(name, ext);
  try {
    if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
      await sharp(src).webp({ quality: 82 }).toFile(path.join(IMAGES, `${base}.webp`));
    } else if (ext === '.svg' || ext === '.webp') {
      await copyFile(src, path.join(IMAGES, name));
    } else if (['.mp4', '.webm', '.mov'].includes(ext)) {
      await copyFile(src, path.join(VIDEOS, name));
    } else if (ext === '.pdf') {
      await copyFile(src, path.join(FILES, name));
    }
  } catch (err) {
    console.error(`skip ${name}: ${err.message}`);
  }
}
console.log('done');
