'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrolled);
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Универсальная функция плавного скролла
  const smoothScrollToTop = () => {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 600; // Продолжительность анимации в мс

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing функция для плавного эффекта
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      
      const easeValue = easeInOutCubic(progress);
      window.scrollTo(0, startPosition * (1 - easeValue));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Проверяем поддержку нативного плавного скролла
    const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    
    if (supportsSmoothScroll) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: showScrollTop ? 1 : 0,
        y: showScrollTop ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      onClick={smoothScrollToTop}
      className="fixed bottom-6 right-6 z-30 flex flex-col items-center gap-2 group"
      aria-label="Наверх"
    >
      {/* Индикатор прогресса */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16">
        {/* Круг прогресса */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Фон круга */}
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(184, 180, 45, 0.2)"
            strokeWidth="3"
          />
          {/* Прогресс */}
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="3"
            strokeDasharray={`${scrollProgress}, 100`}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Кнопка внутри */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center group-hover:bg-accent-dark transition-all duration-300 shadow-lg group-hover:shadow-xl">
            <ArrowUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
      </div>
      
      {/* Текст под кнопкой */}
          <span className="text-xs sm:text-sm text-neutral-dark bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Наверх
      </span>
    </motion.button>
  );
}