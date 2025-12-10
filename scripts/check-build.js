// scripts/check-build.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process'); // Добавьте эту строку

console.log('🔍 Проверяем сборку...');

const outDir = 'out';

if (!fs.existsSync(outDir)) {
  console.log('❌ Папка out не найдена. Выполните npm run build');
  process.exit(1);
}

// Проверяем index.html
console.log('\n📄 Проверяем index.html:');
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');
  
  // Ищем CSS
  const cssMatches = html.match(/href="[^"]*\.css[^"]*"/g);
  if (cssMatches) {
    console.log('Найдены CSS ссылки:');
    cssMatches.forEach(match => console.log(`  ${match}`));
  }
  
  // Ищем пути
  if (html.includes('//_next/')) {
    console.log('⚠️ Найдены двойные слеши в путях');
  }
  
  if (html.includes('/Svaze/_next/')) {
    console.log('✅ Пути содержат /Svaze/');
  } else if (html.includes('/_next/')) {
    console.log('⚠️ Пути без /Svaze/');
  }
} else {
  console.log('❌ index.html не найден');
}

// Проверяем CSS файлы
console.log('\n🎨 Проверяем CSS файлы:');
const cssDir = path.join(outDir, '_next/static/css');
if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir);
  console.log(`Найдено ${cssFiles.length} CSS файлов:`);
  
  cssFiles.forEach(file => {
    const filePath = path.join(cssDir, file);
    const size = fs.statSync(filePath).size;
    const content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`\n  ${file} (${Math.round(size / 1024)} KB):`);
    
    // Проверяем наличие ключевых классов
    const checks = [
      { name: 'bg-primary', found: content.includes('.bg-primary') },
      { name: '.container', found: content.includes('.container') },
      { name: 'Tailwind base', found: content.includes('--tw-border-spacing-x') },
    ];
    
    checks.forEach(check => {
      console.log(`    ${check.found ? '✅' : '❌'} ${check.name}`);
    });
  });
} else {
  console.log('❌ CSS директория не найдена');
}

// Проверяем структуру
console.log('\n📁 Структура out/:');
try {
  execSync('find out -maxdepth 2 -type f -name "*.css" -o -name "*.html" | head -20', { stdio: 'inherit' });
} catch (e) {
  console.log('  (команда find не выполнена)');
}