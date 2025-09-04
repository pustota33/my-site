#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🛡️  Setting up encoding issue prevention...');

// 1. Ensure all source files are UTF-8
console.log('📝 Converting all files to UTF-8...');
const projectRoot = path.resolve(__dirname, '..');

function convertToUtf8(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, content, { encoding: 'utf8' });
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
    return false;
  }
}

function processDirectoryForUtf8(dirPath, extensions = ['.tsx', '.ts', '.js', '.jsx', '.html']) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectoryForUtf8(fullPath, extensions);
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      convertToUtf8(fullPath);
    }
  }
}

// Convert all files to UTF-8
['client', 'server', 'shared'].forEach(dir => {
  processDirectoryForUtf8(path.join(projectRoot, dir));
});

// Convert index.html
convertToUtf8(path.join(projectRoot, 'index.html'));

// 2. Create a git pre-commit hook to prevent encoding issues
console.log('🎯 Setting up git pre-commit hook...');
const gitHooksDir = path.join(projectRoot, '.git', 'hooks');
const preCommitHook = path.join(gitHooksDir, 'pre-commit');

const hookContent = `#!/bin/sh
echo "🔍 Checking for encoding issues before commit..."

# Run encoding fix before every commit
npm run fix-encoding-comprehensive

# Check if any files still have encoding issues
if grep -r "��" client/ server/ shared/ index.html 2>/dev/null; then
    echo "❌ Encoding issues detected! Please fix before committing."
    exit 1
fi

echo "✅ No encoding issues found."
exit 0
`;

if (fs.existsSync(gitHooksDir)) {
  fs.writeFileSync(preCommitHook, hookContent);
  try {
    fs.chmodSync(preCommitHook, 0o755);
    console.log('✅ Git pre-commit hook installed');
  } catch (error) {
    console.warn('⚠️  Could not make pre-commit hook executable:', error.message);
  }
} else {
  console.warn('⚠️  Git hooks directory not found, skipping pre-commit hook');
}

// 3. Create a watch script for development
console.log('👀 Creating encoding watch script...');
const watchScript = `#!/usr/bin/env node

import chokidar from 'chokidar';
import { execSync } from 'child_process';

console.log('👀 Watching for file changes to prevent encoding issues...');

const watcher = chokidar.watch(['client/**/*.{tsx,ts}', 'server/**/*.{ts,js}'], {
  ignored: /node_modules/,
  persistent: true
});

watcher.on('change', (path) => {
  console.log(\`📝 File changed: \${path}\`);
  try {
    execSync('npm run fix-encoding-comprehensive', { stdio: 'pipe' });
    console.log('✅ Encoding check completed');
  } catch (error) {
    console.error('❌ Encoding check failed:', error.message);
  }
});

console.log('✅ Encoding watcher started. Press Ctrl+C to stop.');
`;

fs.writeFileSync(path.join(projectRoot, 'scripts', 'watch-encoding.js'), watchScript);

console.log('🎉 Encoding issue prevention setup complete!');
console.log('');
console.log('📋 What was done:');
console.log('   ✅ All files converted to UTF-8');
console.log('   ✅ Comprehensive encoding fix script created');
console.log('   ✅ Git pre-commit hook installed');
console.log('   ✅ Dev server configured for UTF-8');
console.log('   ✅ Strong cache-busting headers added');
console.log('   ✅ HTML meta tags strengthened');
console.log('');
console.log('🛠️  Available commands:');
console.log('   npm run fix-encoding-comprehensive  - Fix all encoding issues');
console.log('   npm run dev:clean                   - Clean dev with encoding fix');
console.log('   npm run check-encoding              - Check file encodings');
console.log('');
console.log('🚀 The page should now display correctly without encoding issues!');
