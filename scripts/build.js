import crypto from 'crypto';
import { config as loadEnv } from 'dotenv';
import * as esbuild from 'esbuild';
import { postcssModules, sassPlugin } from 'esbuild-sass-plugin';
import fs from 'fs';
import path from 'path';

const { parsed: ENV } = loadEnv();

const isDevMode = process.argv.includes('--dev');

const deleteFolderRecursive = (directoryPath) => {
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

const areFilesEqual = async (file1, file2) => {
  const hash1 = crypto.createHash('sha256');
  const hash2 = crypto.createHash('sha256');

  hash1.update(file1);
  hash2.update(file2);

  return hash1.digest('hex') === hash2.digest('hex');
};

let rebuildCounter = 0;
let isFirstBuild = true;
let lastBundleCss;
let lastBundleJs;

const consolePrinter = {
  name: 'consolePrinter',
  setup(build) {
    build.onStart(() => {
      if (isDevMode) {
        console.clear();
        console.log('Rebuild #' + rebuildCounter++);
      }

      deleteFolderRecursive('dist');
      fs.mkdirSync('dist');

      fs.cpSync('src/public', 'dist', {
        'recursive': true,
      });
    });

    build.onEnd(async (result) => {
      if (result.errors.length) {
        console.log(`\nFound ${result.errors.length} errors.`);
        return;
      }

      const currentBundleCss = fs.readFileSync('dist/bundle.css');
      const currentBundleJs = fs.readFileSync('dist/bundle.js');

      if (!isFirstBuild) {
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

      console.log(`Server on http://localhost:${process.env.PORT || 3000}\n`);
      isFirstBuild = false;
    });
  },
};

const context = await esbuild.context({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: process.env.ambient === 'production',
  sourcemap: process.env.ambient !== 'production',
  outfile: 'dist/bundle.js',
  define: {
    'process.env': JSON.stringify(ENV || {}),
  },
  plugins: [
    sassPlugin({
      filter: /\.module\.(c|sc)ss$/,
      transform: postcssModules({
        generateScopedName: '[local]_[hash:base64:11]',
      }),
    }),
    sassPlugin({
      filter: /\.(c|sc)ss$/,
    }),
    consolePrinter,
  ],
});

if (isDevMode) {
  import('./server.js').then(() => {
    context.watch();
  });
}
