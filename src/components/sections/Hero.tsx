'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import portrait from '../../assets/images/p3.jpg';

// ТОЛЬКО ДЛЯ H1 - анимация букв
const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.5
    }
  }
}

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20
    }
  }
}

const nameLetters = {
  "СЮЗАННА": "СЮЗАННА".split(''),
  "КИМ": "КИМ".split('')
};

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="bg-primary pt-10 pb-12 md:pt-14 md:pb-14 lg:pt-16 lg:pb-20"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-earth-brown) 100%)'
      }}
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12 lg:gap-16 items-end">
          
          {/* Левая колонка - текст */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Обертка для h1 с letterVariants */}
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-tight">
                {/* Первая строка - СЮЗАННА */}
                <span className="block tracking-tight">
                  {nameLetters["СЮЗАННА"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                      style={{
                        color: '#d9dbd2', // Dust Grey
                        textShadow: '2px 2px 4px rgba(55, 73, 64, 0.5)'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                
                {/* Вторая строка - КИМ с задержкой */}
                <motion.span 
                  className="block tracking-tight"
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  {nameLetters["КИМ"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                      style={{
                        color: 'var(--color-faded-copper)'}}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </motion.div>

            {/* Остальная оригинальная анимация */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              style={{
                color: '#d9dbd2' // Dust Grey
              }}
            >
              Осознанная коммуникация для бизнеса и жизни через{' '}
              <span 
                className="font-medium"
                style={{
                  color: 'var(--color-warm-accent)',
                  textShadow: '0 0 10px rgba(186, 159, 129, 0.3)'
                }}
              >
                Process Communication Model
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: 'var(--color-green-fern)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = window.innerWidth >= 1024 ? 80 : 72;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group relative overflow-hidden w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4 xl:px-10 xl:py-5 rounded-lg"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-medium text-white">
                  Начать диалог
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div 
                  className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    background: 'linear-gradient(to right, var(--color-accent), var(--color-muted-teal))'
                  }}
                ></div>
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  borderColor: 'var(--color-faded-copper)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('private');
                  if (element) {
                    const headerHeight = window.innerWidth >= 1024 ? 80 : 72;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group border w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4 xl:px-10 xl:py-5 rounded-lg"
                style={{
                  borderColor: 'var(--color-warm-accent)',
                  backgroundColor: 'rgba(186, 159, 129, 0.1)',
                  boxShadow: '0 4px 15px rgba(186, 159, 129, 0.1)'
                }}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-medium"
                  style={{
                    color: 'var(--color-warm-accent)'
                  }}
                >
                  Посмотреть услуги
                  <ArrowRightIcon 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300"
                    style={{
                      color: 'var(--color-warm-accent)'
                    }}
                  />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Фото с оригинальной анимацией - БЕЗ НАЛОЖЕНИЙ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              
              <div className="lg:hidden relative">
                <div className="relative h-[300px] sm:h-[340px] md:h-[380px]">
                  <div 
                    className="absolute -left-2 -top-2 w-10 h-10 border-t-2 border-l-2 sm:w-12 sm:h-12 md:w-14 md:h-14"
                    style={{
                      borderColor: 'var(--color-faded-copper)',
                      opacity: 0.6
                    }}
                  ></div>
                  <div 
                    className="absolute -right-2 -bottom-2 w-10 h-10 border-b-2 border-r-2 sm:w-12 sm:h-12 md:w-14 md:h-14"
                    style={{
                      borderColor: 'var(--color-green-fern)',
                      opacity: 0.6
                    }}
                  ></div>
                  
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                      borderRadius: '10px',
                      boxShadow: '0 15px 30px rgba(69, 54, 34, 0.25)'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={portrait}
                        alt="Сюзанна Ким"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="relative h-[380px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px]">
                  <div 
                    className="absolute -left-2 -top-2 w-10 h-10 border-t-2 border-l-2 z-10 sm:w-12 sm:h-12"
                    style={{
                      borderColor: 'var(--color-faded-copper)',
                      opacity: 0.6
                    }}
                  ></div>
                  <div 
                    className="absolute -right-2 -bottom-2 w-10 h-10 border-b-2 border-r-2 z-10 sm:w-12 sm:h-12"
                    style={{
                      borderColor: 'var(--color-green-fern)',
                      opacity: 0.6
                    }}
                  ></div>
                  
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                      borderRadius: '12px',
                      boxShadow: '0 20px 40px rgba(69, 54, 34, 0.3)'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={portrait}
                        alt="Сюзанна Ким"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}