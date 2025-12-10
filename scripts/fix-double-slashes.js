// scripts/fix-double-slashes.js
const fs = require('fs');
const path = require('path');

console.log('🔧 Исправляем двойные слеши...');

const outDir = 'out';

function fixDoubleSlashes(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Исправляем /Svaze//_next/ → /Svaze/_next/
  content = content.replace(/\/Svaze\/\/_next\//g, '/Svaze/_next/');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Исправлен: ${filePath}`);
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.name.endsWith('.html')) {
      fixDoubleSlashes(fullPath);
    } else if (item.name.endsWith('.css')) {
      // Также исправляем CSS
      let css = fs.readFileSync(fullPath, 'utf8');
      css = css.replace(/\/Svaze\/\/_next\//g, '/Svaze/_next/');
      fs.writeFileSync(fullPath, css);
    }
  }
}

if (fs.existsSync(outDir)) {
  processDirectory(outDir);
  console.log('✅ Все двойные слеши исправлены!');
} else {
  console.log('❌ Папка out не найдена');
}