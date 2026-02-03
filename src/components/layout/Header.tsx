'use client';

import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const navItems = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Для бизнеса', href: '#business' },
    { name: 'Частным клиентам', href: '#private' },
    { name: 'Контакты', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Инициализируем ширину
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Функция для открытия/закрытия меню с анимацией
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Открытие меню
      setIsMenuOpen(true);
      setIsAnimating(true);
      // Блокируем скролл, но сохраняем ширину полосы прокрутки
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0'; // Сбрасываем padding
    } else {
      // Закрытие меню
      setIsAnimating(false);
      setTimeout(() => {
        setIsMenuOpen(false);
        // Восстанавливаем скролл
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }, 400);
    }
  };

  // Функция для плавного скролла
  const handleNavClick = (href: string) => {
    if (isMenuOpen) {
      toggleMenu();
    }
    
    setTimeout(() => {
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
    }, 450);
  };

  // Функция для клика по логотипу
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isMenuOpen) {
      toggleMenu();
    }
    
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Рассчитываем адаптивную ширину меню
  const getMenuWidth = () => {
    if (windowWidth === 0) return '280px';
    
    // На очень узких экранах используем меньшую ширину
    if (windowWidth <= 320) {
      return '260px';
    }
    
    // На средних экранах используем фиксированную ширину
    if (windowWidth <= 480) {
      return '280px';
    }
    
    // На более широких экранах можно использовать w-64 (256px) или немного больше
    return '280px';
  };

  return (
    <>
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
          
          <a
            href="/"
            className="flex items-center gap-3 no-underline"
            onClick={(e) => { e.preventDefault(); handleLogoClick(e as unknown as React.MouseEvent); window.location.href = '/' }}
          >
            <div className="flex flex-col">
              <span 
                className="text-surface font-bold text-xl sm:text-2xl tracking-tight uppercase"
                style={{
                  textShadow: '2px 2px 4px rgba(55, 73, 64, 0.5)'
                }}
              >
                Svaze.<span style={{ color: 'var(--color-warm-accent)' }}>pro</span>
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-base font-medium transition-colors duration-300 relative group"
                style={{
                  color: '#d9dbd2'
                }}
              >
                <span>{item.name}</span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-warm-accent)'
                  }}
                ></span>
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
              <span className="relative z-10 text-surface">
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

          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg relative group"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            style={{
              border: '1px solid var(--color-warm-accent)'
            }}
          >
            {isMenuOpen ? (
              <XMarkIcon 
                className="w-6 h-6 transition-transform duration-300"
                style={{
                  color: 'var(--color-surface)'
                }}
              />
            ) : (
              <Bars3Icon 
                className="w-6 h-6 transition-transform duration-300"
                style={{
                  color: 'var(--color-surface)'
                }}
              />
            )}
          </button>
        </nav>
      </header>

      {(isMenuOpen || isAnimating) && (
        <>
          <div 
            className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
              isAnimating ? 'bg-black/70' : 'bg-black/0'
            }`}
            onClick={toggleMenu}
          />
          
          <div 
            className={`lg:hidden fixed top-20 right-0 bottom-0 z-50 transition-all duration-500 ease-out ${
              isAnimating 
                ? 'translate-x-0' 
                : 'translate-x-full'
            }`}
            style={{
              background: 'var(--color-primary)',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.4)',
              width: getMenuWidth(),
              maxWidth: '85%', // Не более 85% от ширины экрана
              overflowY: 'auto',
            }}
          >
            <div className="p-4 h-full">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="py-3 text-left text-lg font-medium transition-all duration-300 relative group w-full"
                    style={{
                      color: '#d9dbd2',
                      animation: isAnimating 
                        ? `slideInRight 0.4s ease-out ${index * 0.08 + 0.2}s both`
                        : 'none',
                    }}
                  >
                    <span>{item.name}</span>
                    <span 
                      className="absolute bottom-2 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--color-warm-accent)'
                      }}
                    ></span>
                    <span 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        color: 'var(--color-faded-copper)'
                      }}
                    >
                      →
                    </span>
                  </button>
                ))}
                
                <div 
                  className="pt-4 mt-4 border-t transition-all duration-300"
                  style={{
                    borderColor: 'rgba(217, 219, 210, 0.1)',
                    animation: isAnimating 
                      ? `fadeIn 0.5s ease-out 0.6s both`
                      : 'none',
                  }}
                >
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full py-3 font-semibold rounded-lg relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-green-fern) 100%)',
                      boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)',
                      animation: isAnimating 
                        ? `bounceIn 0.5s ease-out 0.7s both`
                        : 'none',
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
                  className="pt-4 mt-4 border-t transition-all duration-300"
                  style={{
                    borderColor: 'rgba(217, 219, 210, 0.1)',
                    animation: isAnimating 
                      ? `fadeIn 0.5s ease-out 0.8s both`
                      : 'none',
                  }}
                >
                  <a
                    href="/privacy"
                    className="text-base transition-colors duration-300 block py-2"
                    style={{
                      color: 'rgba(217, 219, 210, 0.7)',
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
        </>
      )}

      <div className="h-20" />

      <style>{`
        html {
          overflow-x: hidden;
          width: 100%;
        }
        
        body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          70% {
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        body.no-scroll {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}