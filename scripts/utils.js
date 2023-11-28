import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const areFilesEqual = async (file1, file2) => {
  const hash1 = crypto.createHash('sha256');
  const hash2 = crypto.createHash('sha256');

  hash1.update(file1);
  hash2.update(file2);

  return hash1.digest('hex') === hash2.digest('hex');
};

let lastBundleCss;
let lastBundleJs;
export const sendEventOnChanges = async () => {
  const currentBundleCss = fs.readFileSync('dist/bundle.css');
  const currentBundleJs = fs.readFileSync('dist/bundle.js');

  if (!!lastBundleJs && !!lastBundleCss) {
    const hasChangesOnCSS = !await areFilesEqual(currentBundleCss, lastBundleCss);
    const hasChangesOnJS = !await areFilesEqual(currentBundleJs, lastBundleJs);
    fetch('http://localhost:3000/esbuild/change', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hasChangesOnCSS,
        hasChangesOnJS,
      }),
    });
  }

  lastBundleCss = currentBundleCss;
  lastBundleJs = currentBundleJs;
};

export const deleteFolderRecursive = (directoryPath) => {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  }
};