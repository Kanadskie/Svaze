'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, UserGroupIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import aboutPhoto from '../../assets/images/p4.jpg';

export default function About() {
  const stats = [
    { 
      icon: <AcademicCapIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Опыт', 
      value: '15+ лет', 
      desc: 'В коучинге' 
    },
    { 
      icon: <UserGroupIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Клиенты', 
      value: '500+', 
      desc: 'Довольных участников' 
    },
    { 
      icon: <ChartBarIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Тренинги', 
      value: '100+', 
      desc: 'Успешно проведено' 
    },
    { 
      icon: <CheckCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Результат', 
      value: '95%', 
      desc: 'Рекомендуют коллегам' 
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Заголовок для мобильных */}
          <div className="lg:hidden text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4"
            >
              <span className="text-neutral-dark">ОБО </span>
              <span className="text-accent">МНЕ</span>
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
              <div className="absolute -left-1 -top-1 xs:-left-2 xs:-top-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-accent opacity-60 z-10"></div>
              <div className="absolute -right-1 -bottom-1 xs:-right-2 xs:-bottom-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-accent opacity-60 z-10"></div>
              
              {/* Основной контейнер фото со скошенным углом */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                  borderRadius: '8px sm:rounded-lg md:rounded-xl',
                  boxShadow: '0 10px 20px rgba(72, 83, 32, 0.1) sm:0 15px 30px rgba(72, 83, 32, 0.15)'
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

          {/* Контент в 3 колонки с адаптивной сеткой */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Первая колонка - Заголовок + Фото (скрыт на мобильных) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex flex-col lg:col-span-1"
            >
              <div className="sticky top-0 space-y-6 md:space-y-8">
                {/* Заголовок */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-neutral-dark block">ОБО</span>
                  <span className="text-accent block mt-2 lg:mt-3">МНЕ</span>
                </h2>
                
                {/* Фото с уголками для десктопа */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
                >
                  {/* Декоративные уголки */}
                  <div className="absolute -left-2 -top-2 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2 border-accent opacity-60 z-10"></div>
                  <div className="absolute -right-2 -bottom-2 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-accent opacity:60 z-10"></div>
                  
                  {/* Основной контейнер фото со скошенным углом */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                      borderRadius: '12px md:rounded-xl',
                      boxShadow: '0 15px 35px rgba(72, 83, 32, 0.15)'
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

            {/* Вторая колонка - Текст */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3 sm:space-y-4 md:space-y-5 lg:col-span-3"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-neutral-dark leading-relaxed text-sm sm:text-base md:text-lg"
              >
                Меня зовут Сюзанна. Я сертифицированный тренер по <span className="text-accent font-semibold">Process Communication Model (PCM)</span> — модели, которая помогает видеть глубинную структуру человеческого общения. Работаю с людьми, командами и компаниями, которые стремятся к осознанности, эффективности и внутренней гармонии через коммуникацию.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative pl-3 sm:pl-4"
              >
                <div className="absolute left-0 top-2 bottom-2 w-0.5 sm:w-1 bg-gradient-to-b from-accent to-accent/60 rounded-full"></div>
                <p className="text-neutral-dark leading-relaxed text-sm sm:text-base md:text-lg pl-3 sm:pl-4">
                  <span className="text-accent font-semibold">PCM</span> — это не просто метод, а навык понимать: почему мы действуем именно так, как реагируем в стрессе, что нас мотивирует и как найти общий язык даже в самых сложных ситуациях. В основе модели лежат шесть личностных типов, каждый со своими сильными сторонами, потребностями и особенностями взаимодействия. Через эту призму легко увидеть, где теряется контакт — и как его вернуть.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-3 sm:pt-4 border-t border-[#e5e5e5]"
              >
                <p className="text-neutral-dark leading-relaxed text-sm sm:text-base md:text-lg">
                  Мой подход сочетает научную глубину, мягкость и игровую динамику. На тренингах и индивидуальных встречах мы не просто обсуждаем теорию — мы проживаем реальные ситуации, учимся говорить так, чтобы быть услышанными, и слушать так, чтобы понимать.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-br from-[#f8f8f8] to-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-[#e5e5e5] shadow-sm"
              >
                <p className="text-neutral-dark leading-relaxed text-sm sm:text-base md:text-lg">
                  Опыт корпоративных программ, обучения руководителей и сотен индивидуальных клиентов позволил мне создать систему, где осознанная коммуникация становится не абстрактным навыком, а инструментом реальных изменений — в отношениях, в командах и в бизнесе. <span className="text-accent font-semibold">Мне важно</span>, чтобы каждый участник уходил не только с пониманием, но и с осязаемым <span className="text-accent font-semibold">результатом</span>: улучшенным контактом, спокойствием и уверенностью в общении.
                </p>
              </motion.div>
            </motion.div>

            {/* Третья колонка - Карточки */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1 }}
              className="space-y-3 sm:space-y-4 md:space-y-5 lg:col-span-2"
            >
              {/* Сетка карточек статистики */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="card-minimal group p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-[#f8f8f8] border border-[#e5e5e5] hover:border-accent/40 transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md"
                  >
                    <div className="text-accent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-dark mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-accent font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                      {stat.title}
                    </div>
                    <div className="text-neutral-dark text-xs sm:text-sm md:text-base">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Дополнительный блок */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-[#e5e5e5] shadow-sm"
              >
                <h3 className="text-neutral-dark font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">
                  Основа подхода
                </h3>
                <p className="text-neutral-dark text-xs sm:text-sm md:text-base leading-relaxed">
                  Сочетание научной глубины PCM с практической применимостью в реальных ситуациях
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}