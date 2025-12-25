'use client'

import { motion } from 'framer-motion'
import { Users, Heart, CheckCircle } from 'lucide-react'
import personalPhoto from '../../assets/images/p1.jpg'

const services = [
  {
    icon: Users,
    title: 'Отношения и семья',
    description: 'Выстраивание доверия, управление конфликтами, возвращение тепла и уважения в диалог. Помощь в том, чтобы слышать себя и другого без обвинений.'
  },
  {
    icon: Heart,
    title: 'Родительство',
    description: 'Как говорить с ребёнком так, чтобы он чувствовал поддержку; как замечать его потребности и сохранять спокойствие, даже когда эмоции зашкаливают.'
  },
  {
    icon: CheckCircle,
    title: 'Метод PCM',
    description: 'Через PCM мы понимаем, что каждое сообщение — это не просто слова, а отражение внутреннего состояния. Вместе мы учимся читать сигналы, замечать стрессовые драйверы и грамотно находить к ним подход.'
  },
  {
    icon: CheckCircle,
    title: 'Безопасная атмосфера',
    description: 'Все встречи проходят в безопасной атмосфере, где можно открыто разбирать личные сложности и находить решения. Без оценок, без шаблонных советов — с вниманием, практикой и добротой.'
  }
]

export default function PrivateClients() {
  return (
    <section 
      id="private" 
      className="section-padding relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface) 100%)'
      }}
    >
      <div className="container-custom px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
              <span style={{ color: 'var(--color-neutral-dark)' }} className="uppercase">Частным</span>
              <span style={{ color: 'var(--color-warm-accent)' }} className="uppercase"> клиентам</span>
            </h2>
            <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto px-2 sm:px-4"
               style={{ color: 'var(--color-neutral-dark)' }}>
              Каждый из нас сталкивается с трудностями в общении — недосказанными чувствами, конфликтами, непониманием. Моя задача — помочь увидеть закономерности в этих ситуациях и найти путь к взаимопониманию.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
            {/* Левая часть - Сервисы */}
            <div className="lg:w-2/3 mb-6 sm:mb-8 lg:mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 rounded-lg sm:rounded-xl flex items-center justify-center"
                         style={{
                           background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
                         }}>
                      <service.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" 
                                   style={{ color: 'var(--color-var(--color-surface))' }} />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3"
                        style={{ color: 'var(--color-neutral-dark)' }}>
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed"
                       style={{ color: 'var(--color-neutral-dark)' }}>
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Правая часть - Фото со скошенными уголками */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3 flex flex-col items-center lg:items-start lg:sticky lg:top-6"
            >
              <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto">
                {/* Контейнер со скошенными уголками */}
                <div className="relative h-[250px] xs:h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px]">
                  {/* Декоративные уголки */}
                  <div className="absolute -left-1 -top-1 xs:-left-2 xs:-top-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-l-2 z-10"
                       style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}></div>
                  <div className="absolute -right-1 -bottom-1 xs:-right-2 xs:-bottom-2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-r-2 z-10"
                       style={{ borderColor: 'var(--color-primary)', opacity: 0.8 }}></div>
                  
                  {/* Основной контейнер фото со скошенным углом */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                      borderRadius: '8px sm:rounded-xl',
                      boxShadow: '0 10px 25px var(--shadow-light)'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={personalPhoto}
                        alt="Работа с частными клиентами"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border shadow-sm"
                     style={{
                       background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                       borderColor: 'var(--color-border)'
                     }}>
                  <p className="text-center italic text-xs sm:text-sm md:text-base"
                     style={{ color: 'var(--color-neutral-dark)' }}>
                    "Понимание себя и других — ключ к гармоничным отношениям"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}