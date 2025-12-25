'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative overflow-hidden py-6 sm:py-8 md:py-10 bg-primary"
    >
      {/* Градиентная граница сверху - вариант 1: Плавный градиент */}
      <div className="absolute top-0 left-0 right-0 h-[1px]">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(217, 219, 210, 0.3), var(--color-accent), rgba(217, 219, 210, 0.3), transparent)',
            boxShadow: '0 0 10px rgba(54, 106, 93, 0.3)'
          }}
        />
      </div>

      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">

          {/* Копирайт - адаптивный текст */}
          <p 
            className="text-base order-3 sm:order-1 text-center sm:text-left"
            style={{ color: '#d9dbd2' }}
          >
            &copy; {currentYear} <span style={{ color: '#ffffff' }}>Сюзанна</span>
            <span style={{ color: 'var(--color-accent)' }}> Ким</span>.
            Все права защищены.
          </p>
          
          {/* Политика конфиденциальности */}
          <div className="flex gap-4 sm:gap-6 sm:order-3">
          <a 
            href="/privacy" 
            className="text-base transition-colors duration-300 hover:text-accent"
            style={{ 
              color: '#d9dbd2', // Тот же Dust Grey
              textShadow: '2px 2px 4px rgba(55, 73, 64, 0.5)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#d9dbd2'}
          >
            Политика конфиденциальности
          </a>
          </div>
          
        </div>

        {/* Декоративный элемент снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-10">
          <div 
            className="h-full w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(217, 219, 210, 0.5), transparent)',
            }}
          />
        </div>
        
      </div>
    </footer>
  );
}