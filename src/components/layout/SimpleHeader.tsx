// app/components/SimpleHeader.tsx
'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function SimpleHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Основной хедер */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-95 backdrop-blur-md shadow-lg' 
            : 'bg-primary-95'
        }`}
        style={{ 
          height: '80px',
        }}
      >
        <nav className="container-custom h-full flex items-center justify-between">
          
          {/* Логотип - такой же как в основном Header */}
          <Link 
            to="/" 
            className="flex items-center gap-3 no-underline"
          >
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
                Политика конфиденциальности
              </span>
            </div>
          </Link>

          {/* Кнопка возврата - стилизованная как кнопки в основном Header */}
        <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    to="/"
    className="flex items-center gap-2 px-4 sm:px-6 py-2.5 font-semibold rounded-lg relative overflow-hidden group"
    style={{
      background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-green-fern) 100%)',
      boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
    }}
  >
    {/* Стрелка и текст должны быть поверх всего */}
    <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-2 transition-transform duration-300 relative z-10" />
    <span className="relative z-10 text-white text-sm sm:text-base ml-1">
      <span className="hidden sm:inline">На главную</span>
      <span className="sm:hidden">Назад</span>
    </span>
    
    {/* Градиентный оверлей - должен быть ПОД контентом */}
    <div 
      className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"
      style={{
        background: 'linear-gradient(to right, var(--color-accent), var(--color-muted-teal))'
      }}
    ></div>
  </Link>
</motion.div>
        </nav>
      </header>

      {/* Отступ для фиксированного хедера */}
      <div className="h-20" />
    </>
  );
}