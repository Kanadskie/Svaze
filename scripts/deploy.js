// scripts/deploy.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Деплой проекта...');

try {
  // 1. Очистка
  console.log('🧹 Очищаем...');
  execSync('rm -rf .next out', { stdio: 'inherit' });
  
  // 2. Сборка
  console.log('🔨 Собираем проект...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 3. Копируем папку videos из public в out
  console.log('📁 Копируем видео...');
  const sourceVideosDir = path.join(__dirname, '../public/videos');
  const destVideosDir = path.join(__dirname, '../out/videos');
  
  if (fs.existsSync(sourceVideosDir)) {
    // Создаем папку если её нет
    if (!fs.existsSync(destVideosDir)) {
      fs.mkdirSync(destVideosDir, { recursive: true });
    }
    
    // Копируем файлы
    const videoFiles = fs.readdirSync(sourceVideosDir);
    videoFiles.forEach(file => {
      if (file.endsWith('.mp4')) {
        const sourcePath = path.join(sourceVideosDir, file);
        const destPath = path.join(destVideosDir, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Скопировано видео: ${file}`);
      }
    });
  } else {
    console.warn('⚠️ Папка public/videos не найдена!');
  }
  
  // 4. Проверяем и исправляем пути в HTML
  console.log('🔍 Проверяем пути в HTML...');
  const htmlPath = 'out/index.html';
  
  if (!fs.existsSync(htmlPath)) {
    throw new Error('HTML файл не найден! Проверьте сборку.');
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Проверяем текущие пути
  if (html.includes('/Svaze/_next/')) {
    console.log('✅ Next.js уже добавил /Svaze/ к путям');
  } else if (html.includes('//_next/')) {
    console.log('⚠️ Найдены двойные слеши, исправляем...');
    html = html.replace(/\/\/_next\//g, '/_next/');
  }
  
  // Если нет /Svaze/, добавляем его к путям _next
  if (!html.includes('/Svaze/_next/') && html.includes('/_next/')) {
    console.log('➕ Добавляем /Svaze/ к путям...');
    html = html
      .replace(/href="\/_next\//g, 'href="/Svaze/_next/')
      .replace(/src="\/_next\//g, 'src="/Svaze/_next/');
  }
  
  // Исправляем пути к видео
  console.log('🎬 Исправляем пути к видео...');
  html = html.replace(/src="\/videos\//g, 'src="/Svaze/videos/');
  
  // Сохраняем исправленный HTML
  fs.writeFileSync(htmlPath, html);
  console.log('✅ index.html обновлен');
  
  // 5. Проверяем и исправляем CSS файлы
  console.log('🔧 Проверяем CSS файлы...');
  const cssDir = path.join(__dirname, '../out/_next/static/css');
  
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir);
    cssFiles.forEach(file => {
      if (file.endsWith('.css')) {
        const cssPath = path.join(cssDir, file);
        let cssContent = fs.readFileSync(cssPath, 'utf8');
        
        // Исправляем пути в CSS
        cssContent = cssContent.replace(/url\(\/_next\//g, 'url(/Svaze/_next/');
        cssContent = cssContent.replace(/url\("\/_next\//g, 'url("/Svaze/_next/');
        cssContent = cssContent.replace(/url\('\/_next\//g, 'url(\'/Svaze/_next/');
        
        fs.writeFileSync(cssPath, cssContent);
        console.log(`✅ CSS файл исправлен: ${file}`);
      }
    });
  }
  
  // 6. Проверяем JS файлы
  console.log('⚡ Проверяем JS файлы...');
  const jsDir = path.join(__dirname, '../out/_next/static/chunks');
  
  if (fs.existsSync(jsDir)) {
    // Рекурсивно ищем JS файлы
    function processJsFiles(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          processJsFiles(filePath);
        } else if (file.endsWith('.js')) {
          try {
            let jsContent = fs.readFileSync(filePath, 'utf8');
            // Исправляем пути к ресурсам в JS
            jsContent = jsContent.replace(/\/_next\//g, '/Svaze/_next/');
            fs.writeFileSync(filePath, jsContent);
          } catch (err) {
            // Пропускаем ошибки чтения (бинарные файлы)
          }
        }
      });
    }
    
    processJsFiles(jsDir);
    console.log('✅ JS файлы проверены');
  }
  
  // 7. Создаем .nojekyll
  fs.writeFileSync('out/.nojekyll', '');
  console.log('✅ Создан .nojekyll');
  
  // 8. Деплой
  console.log('🚀 Деплоим на GitHub Pages...');
  execSync('npx gh-pages -d out -t', { stdio: 'inherit' });
  
  console.log('\n🎉 Деплой успешно завершен!');
  console.log('👉 Откройте: https://kanadskie.github.io/Svaze/');
  console.log('\n📊 Проверьте:');
  console.log('1. Видео: https://kanadskie.github.io/Svaze/videos/v1.mp4');
  console.log('2. Консоль браузера на ошибки загрузки');
  console.log('3. Все изображения и стили загружаются корректно');
  
} catch (error) {
  console.error('❌ Ошибка деплоя:', error.message);
  console.error('💡 Проверьте:');
  console.error('   - Есть ли видео в public/videos/');
  console.error('   - Успешно ли прошла сборка (npm run build)');
  console.error('   - Доступ к репозиторию GitHub');
  process.exit(1);
}