import { deleteFolderRecursive, sendEventOnChanges } from './utils.js';
import { config as loadEnv } from 'dotenv';
import * as esbuild from 'esbuild';
import { postcssModules, sassPlugin } from 'esbuild-sass-plugin';
import fs from 'fs';
import { exit } from 'process';

const { parsed: ENV } = loadEnv();

const isDevMode = process.argv.includes('--dev');

let rebuildCounter = 0;
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

      if (isDevMode) {
        sendEventOnChanges();
        console.log(`Server on http://localhost:${process.env.PORT || 3000}\n`);
      }
    });
  },
};

const context = await esbuild.context({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: !isDevMode,
  sourcemap: isDevMode,
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

if (!isDevMode) {
  await context.rebuild();
  console.log('Build finished.');
  exit(0);
}

import('./server.js').then(() => {
  context.watch();
});