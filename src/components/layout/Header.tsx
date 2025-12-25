'use client';

import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Частным клиентам', href: '#private' },
    { name: 'Для бизнеса', href: '#business' },
    { name: 'Контакты', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для плавного скролла
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Функция для клика по логотипу
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Основной хедер - фиксированный и простой */}
    <header 
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-95 backdrop-blur-md shadow-lg' 
            : 'bg-primary-95'
        }`}
        style={{ 
          height: '80px'
        }}
      >
        <nav className="container-custom h-full flex items-center justify-between">
          
          {/* Логотип */}
          <a
            href="/"
            className="flex items-center gap-3 no-underline"
            onClick={(e) => { e.preventDefault(); handleLogoClick(e as unknown as React.MouseEvent); window.location.href = '/' }}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-muted-teal))'
              }}
            >
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-white font-bold text-xl sm:text-2xl tracking-tight uppercase"
                style={{
                  textShadow: '2px 2px 4px rgba(55, 73, 64, 0.5)'
                }}
              >
                Svaze.<span style={{ color: 'var(--color-warm-accent)' }}>pro</span>
              </span>
              <span 
                className="text-xs font-medium hidden sm:block"
                style={{
                  color: 'var(--color-faded-copper)'
                }}
              >
                PCM Тренер
              </span>
            </div>
          </a>

          {/* Десктопная навигация */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-base font-medium transition-colors duration-300 relative group"
                style={{
                  color: '#d9dbd2' // Dust Grey
                }}
              >
                <span>{item.name}</span>
                {/* Подчеркивание при наведении */}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-warm-accent)'
                  }}
                ></span>
                {/* Эффект свечения при наведении */}
                <span 
                  className="absolute inset-0 rounded opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundColor: 'var(--color-warm-accent)'
                  }}
                ></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-6 py-2.5 font-semibold rounded-lg relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-green-fern) 100%)',
                boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
              }}
            >
              <span className="relative z-10 text-white">
                Начать диалог
              </span>
              <div 
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{
                  background: 'linear-gradient(to right, var(--color-accent), var(--color-muted-teal))'
                }}
              ></div>
            </button>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg relative group"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            style={{
              border: '1px solid var(--color-warm-accent)'
            }}
          >
            {isMenuOpen ? (
              <XMarkIcon 
                className="w-6 h-6"
                style={{
                  color: 'var(--color-surface)'
                }}
              />
            ) : (
              <Bars3Icon 
                className="w-6 h-6"
                style={{
                  color: 'var(--color-surface)'
                }}
              />
            )}
            {/* Эффект свечения при наведении */}
            <span 
              className="absolute inset-0 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                backgroundColor: 'var(--color-warm-accent)'
              }}
            ></span>
          </button>
        </nav>
      </header>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Затемнение фона */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
            style={{
              backdropFilter: 'blur(4px)'
            }}
          />
          
          {/* Панель меню */}
          <div 
            className="absolute top-20 right-0 bottom-0 w-64 p-6"
            style={{
              background: 'var(--color-primary)',
              boxShadow: '-5px 0 20px rgba(0,0,0,0.3)'
            }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="py-3 text-left text-lg font-medium transition-colors duration-300 relative group"
                  style={{
                    color: '#d9dbd2' // Dust Grey
                  }}
                >
                  <span>{item.name}</span>
                  {/* Подчеркивание при наведении */}
                  <span 
                    className="absolute bottom-2 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-warm-accent)'
                    }}
                  ></span>
                  {/* Иконка стрелки */}
                  <span 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      color: 'var(--color-faded-copper)'
                    }}
                  >
                    →
                  </span>
                </button>
              ))}
              
              <div className="pt-4 mt-4 border-t"
                style={{
                  borderColor: 'rgba(217, 219, 210, 0.1)' // Dust Grey с прозрачностью
                }}
              >
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-3 font-semibold rounded-lg relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-green-fern) 100%)',
                    boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
                  }}
                >
                  <span className="relative z-10 text-white">
                    Начать диалог
                  </span>
                  <div 
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: 'linear-gradient(to right, var(--color-accent), var(--color-muted-teal))'
                    }}
                  ></div>
                </button>
              </div>
              <div 
                className="pt-4 mt-4 border-t"
                style={{
                  borderColor: 'rgba(217, 219, 210, 0.1)' // Dust Grey с прозрачностью
                }}
              >
                <a
                  href="/privacy"
                  className="text-base transition-colors duration-300 block py-2"
                  style={{
                    color: 'rgba(217, 219, 210, 0.7)', // Dust Grey с прозрачностью
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(217, 219, 210, 0.7)'}
                >
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Отступ для фиксированного хедера */}
      <div className="h-20" />
    </>
  );
}