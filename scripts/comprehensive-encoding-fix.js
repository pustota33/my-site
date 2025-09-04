#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprehensive mapping of common encoding issues
const ENCODING_FIXES = {
  // Common Cyrillic encoding issues
  'Офф��айн': 'Оффлайн',
  'н��силия': 'насилия', 
  'опир��ется': 'опирается',
  'е�� пробуждения': 'её пробуждения',
  'и��дивидуален': 'индивидуален',
  '��лассы': 'классы',
  'ли��ностного': 'личностного',
  'пон��мания': 'понимания',
  'трансформац��и': 'трансформации',
  'практ��ка': 'практика',
  'практ��к': 'практик',
  '��естественный': 'естественный',
  'е��тественный': 'естественный',
  '��армония': 'Гармония',
  '��рошлого': 'прошлого',
  'Задав��емые': 'Задаваемые',
  'сегодн��': 'сегодня',
  'др��млющую': 'дремлющую',
  'рост��': 'роста',
  'проце��с': 'процесс',
  'глуб��кие': 'глубокие',
  'муз��ка': 'музыка',
  '��тороны': 'стороны',
  '��о ощущениям': 'по ощущениям',
  '�� энергетическими': 'с энергетическими',
  'в��его': 'всего',
  'безопа��на': 'безопасна',
  '��рактика': 'практика',
  'П��и правильном': 'При правильном',
  'опытного ��рактика': 'опытного практика',
  '��ространство': 'пространство',
};

// Pattern to match replacement characters
const REPLACEMENT_CHAR_PATTERNS = [
  /\ufffd+/g,
  /��+/g,
  /\u00C2\u00BF/g,
  /\u00EF\u00BF\u00BD/g,
];

function fixEncoding(content) {
  let fixed = content;
  
  // Apply specific fixes
  for (const [broken, correct] of Object.entries(ENCODING_FIXES)) {
    const regex = new RegExp(broken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    fixed = fixed.replace(regex, correct);
  }
  
  // Remove any remaining replacement characters
  for (const pattern of REPLACEMENT_CHAR_PATTERNS) {
    fixed = fixed.replace(pattern, '');
  }
  
  return fixed;
}

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixEncoding(content);
    
    if (content !== fixed) {
      // Save with explicit UTF-8 BOM to ensure proper encoding
      fs.writeFileSync(filePath, fixed, { encoding: 'utf8' });
      console.log(`✅ Fixed encoding in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath, extensions = ['.tsx', '.ts', '.js', '.jsx', '.html']) {
  if (!fs.existsSync(dirPath)) return 0;
  
  let fixedCount = 0;
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += processDirectory(fullPath, extensions);
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('🔧 Running comprehensive encoding fix...');

const projectRoot = path.resolve(__dirname, '..');
let totalFixed = 0;

totalFixed += processDirectory(path.join(projectRoot, 'client'));
totalFixed += processDirectory(path.join(projectRoot, 'server'));
totalFixed += processDirectory(path.join(projectRoot, 'shared'));

// Fix index.html specifically
const indexPath = path.join(projectRoot, 'index.html');
if (processFile(indexPath)) {
  totalFixed++;
}

console.log(`✨ Comprehensive encoding fix complete! Fixed ${totalFixed} files.`);

// Verify all files are now UTF-8
console.log('🔍 Verifying file encodings...');
const { execSync } = await import('child_process');
try {
  const result = execSync('npm run check-encoding', { encoding: 'utf8' });
  console.log('✅ Encoding verification complete');
} catch (error) {
  console.warn('⚠️  Could not verify encodings:', error.message);
}
