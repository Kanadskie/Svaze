'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
          scrolled 
            ? 'bg-primary-95 backdrop-blur-md shadow-lg' 
            : 'bg-primary'
        }`}
        style={{ height: '80px' }} // Явно задаем высоту
      >
        <nav className="container-custom h-full flex items-center justify-between">
          
          {/* Логотип */}
          <a
            href="/"
            className="flex items-center gap-3 no-underline"
            onClick={(e) => { e.preventDefault(); handleLogoClick(e as unknown as React.MouseEvent); window.location.href = '/' }}
          >
            <div className="w-10 h-10 bg-[#b8b42d] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl sm:text-2xl tracking-tight uppercase">
                Svaze.<span className="text-accent">pro</span>
              </span>
              <span className="text-accent text-xs font-medium hidden sm:block">
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
                className="text-white hover:text-white px-3 py-2 text-base font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-6 py-2.5 bg-accent text-white font-semibold rounded-lg"
            >
              Начать диалог
            </button>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg text-white"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

          {/* Мобильное меню - простое */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Затемнение фона */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Панель меню */}
          <div className="absolute top-20 right-0 bottom-0 bg-primary w-64 p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-accent py-2 text-left text-lg"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 mt-4">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-3 bg-accent text-white font-semibold rounded-lg"
                >
                  Начать диалог
                </button>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                    href="/privacy"
                    className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors duration-300"
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