// scripts/fix-paths.js
const fs = require('fs');
const path = require('path');

console.log('🔧 Исправляем пути в out папке...');

const outDir = 'out';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Исправляем двойные слеши //
  content = content.replace(/\/\/_next\//g, '/_next/');
  
  // 2. Убираем лишние /Svaze/Svaze/
  content = content.replace(/\/Svaze\/Svaze\//g, '/Svaze/');
  
  // 3. Убедимся что пути начинаются с /Svaze/
  if (content.includes('/_next/')) {
    content = content.replace(/href="\/_next\//g, 'href="/Svaze/_next/');
    content = content.replace(/src="\/_next\//g, 'src="/Svaze/_next/');
    content = content.replace(/srcset="\/_next\//g, 'srcset="/Svaze/_next/');
  }
  
  // 4. Исправляем пути в CSS файлах
  content = content.replace(/url\(\/_next\//g, 'url(/Svaze/_next/');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Исправлен: ${filePath}`);
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.name.endsWith('.html') || item.name.endsWith('.css') || item.name.endsWith('.js')) {
      fixFile(fullPath);
    }
  }
}

if (fs.existsSync(outDir)) {
  processDirectory(outDir);
  console.log('✅ Все пути исправлены!');
} else {
  console.log('❌ Папка out не найдена. Сначала выполните npm run build');
}