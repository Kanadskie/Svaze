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
            ? 'backdrop-blur-md shadow-lg' 
            : ''
        }`}
        style={{ 
          height: '80px',
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(55, 73, 64, 0.9) 0%, rgba(69, 54, 34, 0.9) 100%)'
            : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-earth-brown) 100%)'
        }}
      >
        <nav className="container-custom h-full flex items-center justify-between">
          
          {/* Логотип - такой же как в основном Header */}
          <Link 
            to="/" 
            className="flex items-center gap-3 no-underline"
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
              <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="relative z-10 text-white text-sm sm:text-base ml-1">
                <span className="hidden sm:inline">На главную</span>
                <span className="sm:hidden">Назад</span>
              </span>
              <div 
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
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