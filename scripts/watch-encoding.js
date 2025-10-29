#!/usr/bin/env node

import chokidar from 'chokidar';
import { execSync } from 'child_process';

console.log('👀 Watching for file changes to prevent encoding issues...');

const watcher = chokidar.watch(['client/**/*.{tsx,ts}', 'server/**/*.{ts,js}'], {
  ignored: /node_modules/,
  persistent: true
});

watcher.on('change', (path) => {
  console.log(`📝 File changed: ${path}`);
  try {
    execSync('npm run fix-encoding-comprehensive', { stdio: 'pipe' });
    console.log('✅ Encoding check completed');
  } catch (error) {
    console.error('❌ Encoding check failed:', error.message);
  }
});

console.log('✅ Encoding watcher started. Press Ctrl+C to stop.');
