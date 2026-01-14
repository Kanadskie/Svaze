'use client';

import { motion } from 'framer-motion';
import { UserGroupIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';
import aboutPhoto from '../../assets/images/p4.jpg';

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
              <span style={{ color: 'var(--color-neutral-dark)' }}>ОБО </span>
              <span style={{ color: 'var(--color-warm-accent)' }}>МНЕ</span>
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
                  borderRadius: '8px sm:rounded-lg md:rounded-xl',
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
                {/* Заголовок */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span style={{ color: 'var(--color-neutral-dark)' }}>ОБО </span>
                  <span style={{ color: 'var(--color-warm-accent)' }}>МНЕ</span>
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
              className="space-y-3 sm:space-y-4 md:space-y-5 lg:col-span-4"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: 'var(--color-neutral-dark)' }}
              >
                Коммуникация — это не слова. Это контакт.
                Я помогаю людям и командам находить общий язык даже в напряжённых и сложных ситуациях.
                Меня зовут <span style={{ color: 'var(--color-warm-accent)', fontWeight: '600' }}>Сюзанна</span>. Я сертифицированный тренер по <span style={{ color: 'var(--color-warm-accent)', fontWeight: '600' }}>Process Communication Model (PCM)</span>.
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
                  <span style={{ color: 'var(--color-warm-accent)', fontWeight: '600' }}>PCM</span> позволяет увидеть, что стоит за реакциями, стрессом и недопониманием — и изменить способ общения так, чтобы он работал. В работе со мной вы получаете не теорию, а практический навык:
                  говорить ясно, слышать глубже и сохранять контакт.
                </p>
              </motion.div>

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
                      background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-light) 100%)',
                      borderColor: 'var(--color-border)'
                    }}
                  >
                    <div className="mb-2 sm:mb-3"
                         style={{ color: 'var(--color-earth-brown)' }}>
                      {stat.icon}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2"
                         style={{ color: 'var(--color-neutral-dark)' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base"
                         style={{ color: 'var(--color-primary)' }}>
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className='flex justify-center md:justify-start'>
                <button
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
                  className="px-6 py-2.5 my-4 font-semibold rounded-lg relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-green-fern) 100%)',
                    boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
                  }}
                >
                  <span className="relative z-10 text-white">
                    Разобрать вашу ситуацию
                  </span>
                  <div 
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: 'linear-gradient(to right, var(--color-accent), var(--color-muted-teal))'
                    }}
                  ></div>
                </button>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}