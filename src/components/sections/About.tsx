'use client';

import { motion } from 'framer-motion';
import { UserGroupIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';
import aboutPhoto from '../../assets/images/p4.jpg';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { 
      icon: <UserGroupIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Клиенты', 
      value: '300+', 
      desc: 'Индивидуальных клиентов и участников программ' 
    },
    { 
      icon: <AcademicCapIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Программы', 
      value: '20+', 
      desc: 'Корпоративных программ и командных форматов' 
    },
    { 
      icon: <ClockIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Опыт', 
      value: '1000+ часов', 
      desc: 'Практики в обучении и сопровождении' 
    },
  ];

  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface) 100%)'
      }}
    >
      <div className="container-custom px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Заголовок для мобильных */}
          <div className="lg:hidden text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              <span className='inline-block uppercase' style={{ color: 'var(--color-neutral-dark)' }}>Обо</span>
              <span className='uppercase ml-1 md:ml-2 inline-block' style={{ color: 'var(--color-warm-accent)' }}>мне</span>
            </motion.h2>

            {/* Фото с уголками для мобильных */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8 }}
              className="relative max-w-[280px] xs:max-w-xs sm:max-w-sm mx-auto h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] mb-6 sm:mb-8"
            >
              {/* Декоративные уголки */}
              <div className="absolute -left-1 -top-1 xs:-left-2 xs:-top-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-t-2 border-l-2" 
                   style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}></div>
              <div className="absolute -right-1 -bottom-1 xs:-right-2 xs:-bottom-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-b-2 border-r-2"
                   style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}></div>
              
              {/* Основной контейнер фото со скошенным углом */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px var(--shadow-light)'
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={aboutPhoto}
                    alt="Сюзанна Ким"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Заголовок */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8 hidden lg:block">
            <span style={{ color: 'var(--color-neutral-dark)' }}>ОБО </span>
            <span style={{ color: 'var(--color-warm-accent)' }}>МНЕ</span>
          </h2>

          {/* Контент в 2 колонки с адаптивной сеткой */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Первая колонка - Заголовок + Фото (скрыт на мобильных) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex flex-col lg:col-span-2"
            >
              <div className="sticky top-0 space-y-6 md:space-y-8">
                {/* Фото с уголками для десктопа */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[350 px]"
                >
                  {/* Декоративные уголки */}
                  <div className="absolute -left-2 -top-2 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2" 
                       style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}></div>
                  <div className="absolute -right-2 -bottom-2 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2"
                       style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}></div>
                  
                  {/* Основной контейнер фото со скошенным углом */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                      borderRadius: '12px'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={aboutPhoto}
                        alt="Сюзанна Ким"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Вторая колонка - Текст + Инфографика */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              className="p-2 space-y-3 sm:space-y-4 md:space-y-5 lg:col-span-4"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: 'var(--color-neutral-dark)' }}
              >
                <strong>Коммуникация — это не слова. Это контакт</strong>. Я помогаю людям и командам находить общий язык даже в напряжённых и сложных ситуациях.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: 'var(--color-neutral-dark)' }}
              >
                <span className='block'>Меня зовут <span style={{ color: 'var(--color-warm-accent)', fontWeight: '600' }}>Сюзанна</span>. 
                  Я тренер по коммуникациям и работе с поведением в стрессе.
                  Моя задача — не «научить говорить правильно», а помочь выстроить живое, рабочее общение:
                  <div className="mb-4 mt-4">
                    <div className="space-y-2 sm:space-y-3 mb-2">
                        <div className="flex items-start">
                          <CheckCircle 
                            className="h-4 w-4 sm:h-5 sm:w-5 mr-3 mt-0.5 shrink-0" 
                            style={{ color: 'var(--color-warm-accent)' }} 
                          />
                          <span 
                            className="text-sm sm:text-base"
                            style={{ color: 'var(--color-white-70)' }}
                          >
                            Говорить ясно
                          </span>
                        </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3 mb-2">
                        <div className="flex items-start">
                          <CheckCircle 
                            className="h-4 w-4 sm:h-5 sm:w-5 mr-3 mt-0.5 shrink-0" 
                            style={{ color: 'var(--color-warm-accent)' }} 
                          />
                          <span 
                            className="text-sm sm:text-base"
                            style={{ color: 'var(--color-white-70)' }}
                          >
                            Слышать глубже
                          </span>
                        </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3 mb-2">
                        <div className="flex items-start">
                          <CheckCircle 
                            className="h-4 w-4 sm:h-5 sm:w-5 mr-3 mt-0.5 shrink-0" 
                            style={{ color: 'var(--color-warm-accent)' }} 
                          />
                          <span 
                            className="text-sm sm:text-base"
                            style={{ color: 'var(--color-white-70)' }}
                          >
                            Сохранять контакт
                          </span>
                        </div>
                    </div>
                  </div>
                </span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative pl-3 sm:pl-4"
              >
                <div className="absolute left-0 top-2 bottom-2 w-0.5 sm:w-1 bg-gradient-to-b from-warm-accent to-warm-accent/60 rounded-full"
                     style={{ background: 'linear-gradient(to bottom, var(--color-accent), var(--color-accent-40))' }}></div>
                <p className="leading-relaxed text-sm sm:text-base pl-3 sm:pl-4"
                   style={{ color: 'var(--color-neutral-dark)' }}>
                  В работе я опираюсь на современные психологические модели и практики, которые помогают увидеть, <span style={{ color: 'var(--color-warm-accent)', fontWeight: '600' }}>что стоит за реакциями, напряжением и недопониманием,</span> и изменить способ общения так, чтобы он действительно работал.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: 'var(--color-neutral-dark)' }}
              >
                В том числе я сертифицированный тренер международной модели <span style={{ color: 'var(--color-warm-accent)', fontWeight: '600' }}>Process Communication Model</span> (PCM).
              </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1 }}
              className="space-y-3 sm:space-y-4 md:space-y-5 lg:col-span-2"
            >
              {/* Сетка карточек статистики */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.05 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.02 }}
                    className="group p-3 sm:p-4 md:p-5 border transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md cursor-pointer"
                    style={{
                      borderColor: 'var(--color-border)'
                    }}
                  >
                    <div className="mb-2 sm:mb-3"
                         style={{ color: 'var(--color-earth-brown)' }}>
                      {stat.icon}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2"
                         style={{ color: 'var(--color-neutral-dark)' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm"
                         style={{ color: 'var(--color-accent)' }}>
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}