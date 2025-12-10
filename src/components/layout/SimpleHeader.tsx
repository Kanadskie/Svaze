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
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
          scrolled 
            ? 'bg-primary-95 backdrop-blur-md shadow-lg' 
            : 'bg-primary'
        }`}
        style={{ height: '80px' }} // Явно задаем высоту
      >
        <nav className="container-custom h-full flex items-center">
          <div className="flex justify-between items-center w-full">
          
          {/* Логотип - такой же как в основном Header */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group no-underline"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl sm:text-2xl tracking-tight uppercase">
                Svaze.<span className="text-accent">pro</span>
              </span>
              <span className="text-accent text-xs font-medium hidden sm:block">
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
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">На главную</span>
              <span className="sm:hidden">Назад</span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}