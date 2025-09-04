#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ENCODING_PATTERNS = [
  // Пустые символы для кириллицы
  /\�\�/g,
  /\ufffd\ufffd/g,
  /\ufffd/g,
];

const CYRILLIC_FIXES = {
  'К\ufffd\ufffd\ufffd\ufffdда': 'Кунда',
  'п\ufffd\ufffd': 'понимания',
  'каж\ufffd\ufffd': 'каждому',
  'гармо\ufffd\ufffd': 'гармонию',
  'простра\ufffd\ufffd': 'пространство',
  'Расш\ufffd\ufffd': 'Расширение',
  'се\ufffd\ufffd': 'себя',
  'Активаци\ufffd\ufffd': 'Активации',
  'исцел\ufffd\ufffd': 'исцелению',
  'обрес\ufffd\ufffd': 'обрести',
  'Убедит\ufffd\ufffd': 'Убедитесь',
  '\ufffdробудите': 'Пробудите',
  'опы\ufffd\ufffd': 'опыт',
  'подг\ufffd\ufffd': 'подготовку',
  'трансфор\ufffd\ufffd': 'трансформации',
  'внутреннем\ufffd\ufffd': 'внутреннему'
};

function fixEncoding(content) {
  let fixed = content;
  
  // Применяем конкретные исправления
  for (const [broken, correct] of Object.entries(CYRILLIC_FIXES)) {
    fixed = fixed.replace(new RegExp(broken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correct);
  }
  
  // Убираем оставшиеся символы замещения
  for (const pattern of ENCODING_PATTERNS) {
    fixed = fixed.replace(pattern, '');
  }
  
  return fixed;
}

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixEncoding(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed encoding in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath, extensions);
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      processFile(fullPath);
    }
  }
}

// Основная логика
console.log('🔧 Fixing encoding issues...');

const projectRoot = path.resolve(__dirname, '..');
processDirectory(path.join(projectRoot, 'client'));
processDirectory(path.join(projectRoot, 'server'));
processDirectory(path.join(projectRoot, 'shared'));

console.log('✨ Encoding fix complete!');
