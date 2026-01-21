'use client'

import { motion } from 'framer-motion'
import { CheckCircle, MessageSquare, AlertTriangle, Target, Users, Brain, Heart } from 'lucide-react'

const requests = [
  { 
    id: 1, 
    description: 'Вас не слышат или неправильно понимают, даже когда вы говорите по делу',
    icon: MessageSquare 
  },
  { 
    id: 2, 
    description: 'Общение с некоторыми людьми быстро уходит в напряжение, раздражение или защиту',
    icon: AlertTriangle 
  },
  { 
    id: 3, 
    description: 'В стрессовых ситуациях вы реагируете не так, как хотели бы',
    icon: Brain 
  },
  { 
    id: 4, 
    description: 'Вам сложно доносить свою позицию ясно и спокойно, не обостряя конфликт',
    icon: Target 
  },
  { 
    id: 5, 
    description: 'В команде или в отношениях теряется контакт, хотя цели общие',
    icon: Users 
  },
  { 
    id: 6, 
    description: 'Вы хотите лучше понимать себя и других, чтобы общение перестало быть источником стресса',
    icon: Heart 
  }
]

export default function Request() {
  return (
    <section className="section-padding bg-primary py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Заголовок */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="inline-block"
            >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span 
                className="uppercase inline-block"
                style={{ color: 'var(--color-accent)' }}
              >С какими запросами</span>
              <span 
                className="uppercase ml-1 md:ml-2 inline-block"
                style={{ color: 'var(--color-surface)' }}
              > ко мне приходят?</span>
            </h2>
            </motion.div>
            
          </div>

          {/* Карточки - 2 колонки: иконка + описание */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 md:mb-6">
            {requests.map((request, index) => {
              const Icon = request.icon
              
              return (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ 
                    delay: Math.floor(index/2) * 0.1 + (index % 2) * 0.05,
                    duration: 0.5 
                  }}
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl 
                    p-4 sm:p-5 md:p-6 hover:border-accent/30 transition-all duration-300 
                    flex items-start gap-4 sm:gap-5 md:gap-6 h-full"
                  >
                    
                    {/* Левая колонка - Иконка */}
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl 
                        flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: 'rgba(54, 106, 93, 0.2)' // accent-20
                        }}
                      >
                        <Icon 
                            className="h-7 w-7"
                            style={{ color: 'var(--color-accent)' }}
                        />
                        
                        {/* Свечение при ховере */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 
                          transition-opacity duration-300 bg-surface blur-md" />
                      </div>
                    </motion.div>
                    
                    {/* Правая колонка - Описание */}
                    <div className="flex-1">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed 
                        group-hover:text-white transition-colors duration-300"
                        style={{ color: 'var(--color-surface)' }}>
                        {request.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Фраза перехода */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-accent/10 to-green-fern/10 
              blur-2xl rounded-3xl -z-10" />
              
            <div className="p-2 md:p-4 text-center
              hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                
                {/* Иконка */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
                  flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(54, 106, 93, 0.2)'
                  }}>
                  <CheckCircle 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    style={{ color: 'var(--color-accent)' }}
                  />
                </div>
                
                {/* Текст */}
                <div className="max-w-7xl">
                  <h3 className="text-sm md:text-xl font-semibold text-left md:text-center ml-4 md:ml-0" 
                    style={{ color: 'var(--color-surface)' }}>
                    С этими запросами мы и работаем на индивидуальных сессиях и тренингах
                  </h3>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}