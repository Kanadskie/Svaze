'use client'

import { motion } from 'framer-motion'
import { Building2, Users2, Crown, CheckCircle } from 'lucide-react'
import businessPhoto from '../../assets/images/p2.jpg'

const businessSections = [
  {
    icon: Users2,
    title: 'Для HR',
    description: 'Коммуникация — это система, на которой держится всё: от найма до удержания сотрудников. PCM помогает HR-специалистам понимать, кто перед ними, что человека мотивирует и как строить эффективное взаимодействие.',
    benefits: [
      'Увеличение точности отбора кандидатов',
      'Предотвращение конфликтов и выгорания',
      'Укрепление командной динамики',
      'Снижение текучести за счёт понимания личных мотиваций',
      'Улучшение качества внутренних коммуникаций и обратной связи'
    ]
  },
  {
    icon: Crown,
    title: 'Для топ-менеджмента',
    description: 'Руководителям приходится общаться на всех уровнях — с собственниками, коллегами, командами. И часто результат зависит не от стратегии, а от того, как выстроен контакт.',
    benefits: [
      'Понимание, как общаться с разными типами сотрудников',
      'Проведение сложных переговоров без потери баланса',
      'Замечать стрессовое поведение и корректировать его',
      'Эффективно управлять без микроменеджмента',
      'Усиливать влияние через точную и живую коммуникацию'
    ]
  },
  {
    icon: Building2,
    title: 'Для владельцев бизнеса',
    description: 'Для собственников PCM — это инструмент, который помогает видеть компанию как организм, где каждый элемент связан коммуникацией.',
    benefits: [
      'Укрепление корпоративной культуры',
      'Повышение управляемости и прозрачности процессов',
      'Развитие лидеров второго уровня',
      'Улучшение стратегических решений через качественный диалог',
      'Создание системы, где коммуникации поддерживают рост'
    ]
  }
]

export default function Business() {
  return (
    <section 
      id="business" 
      className="section-padding relative"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-earth-brown) 100%)'
      }}
    >
      <div className="container-custom px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span 
                className="uppercase"
                style={{ color: 'var(--color-accent)' }}
              >Для</span>
              <span 
                className="uppercase ml-2"
                style={{ color: '#d9dbd2' }}
              > бизнеса</span>
            </h2>
            <p 
              className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              style={{ color: '#d9dbd2' }}
            >
              Эффективные коммуникации — основа успешного бизнеса
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
            {/* Левая колонка - Фото */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3 flex flex-col items-center lg:items-start lg:sticky lg:top-6 mb-8 lg:mb-0"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-full">
                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                  {/* Угловые элементы */}
                  <div 
                    className="absolute -left-2 -top-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-l-2 z-10"
                    style={{
                      borderColor: 'var(--color-faded-copper)',
                      opacity: 0.6
                    }}
                  ></div>
                  <div 
                    className="absolute -right-2 -bottom-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-r-2 z-10"
                    style={{
                      borderColor: 'var(--color-green-fern)',
                      opacity: 0.6
                    }}
                  ></div>
                  
                  {/* Фото с градиентной рамкой */}
                  <div 
                    className="absolute inset-0 overflow-hidden p-1"
                  >
                    <div 
                      className="relative w-full h-full"
                    >
                      <div 
                        className="relative w-full h-full overflow-hidden"
                        style={{
                          clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                          borderRadius: '10px',
                          boxShadow: '0 20px 40px rgba(55, 73, 64, 0.4)'
                        }}
                      >
                        <img
                          src={businessPhoto}
                          alt="Работа с бизнесом"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="mt-5 sm:mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  style={{
                    boxShadow: '0 4px 15px rgba(55, 73, 64, 0.2)'
                  }}
                >
                  <p 
                    className="text-center italic text-sm sm:text-base"
                    style={{ color: '#d9dbd2' }}
                  >
                    "Эффективная коммуникация — это стратегическое преимущество бизнеса"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Правая часть - Контент */}
            <div className="lg:w-2/3 space-y-6 md:space-y-8">
              {businessSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-white/10"
                  style={{
                    boxShadow: '0 4px 15px rgba(55, 73, 64, 0.2)'
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Первая колонка */}
                    <div className="md:w-1/4">
                      <div 
                        className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'rgba(54, 106, 93, 0.2)' // accent-20
                        }}
                      >
                        <section.icon 
                          className="h-7 w-7" 
                          style={{ color: 'var(--color-accent)' }} 
                        />
                      </div>
                      <h3 
                        className="text-xl sm:text-2xl font-bold mb-4"
                        style={{ color: '#d9dbd2' }}
                      >
                        {section.title}
                      </h3>
                    </div>
                    
                    {/* Вторая колонка */}
                    <div className="md:w-3/4">
                      <p 
                        className="mb-4 md:mb-6 text-sm sm:text-base"
                        style={{ color: 'var(--color-white-80)' }}
                      >
                        {section.description}
                      </p>
                      
                      {/* Дополнительный текст */}
                      {section.title === 'Для HR' && (
                        <p 
                          className="mb-4 md:mb-6 text-sm sm:text-base"
                          style={{ color: 'var(--color-white-80)' }}
                        >
                          Эта модель делает HR не просто администратором процессов, а стратегическим партнёром, который выстраивает культуру живого, понятного и экологичного общения внутри компании.
                        </p>
                      )}
                      
                      {section.title === 'Для топ-менеджмента' && (
                        <p 
                          className="mb-4 md:mb-6 text-sm sm:text-base"
                          style={{ color: 'var(--color-white-80)' }}
                        >
                          Результат — команда, которая слышит руководителя с полуслова, атмосфера доверия и управляемость без давления.
                        </p>
                      )}
                      
                      {section.title === 'Для владельцев бизнеса' && (
                        <p 
                          className="mb-4 md:mb-6 text-sm sm:text-base"
                          style={{ color: 'var(--color-white-80)' }}
                        >
                          Такой бизнес становится живым, устойчивым и чутким к изменениям. И всё начинается с простого — осознанного разговора.
                        </p>
                      )}
                      
                      <div className="space-y-2 md:space-y-3">
                        {section.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle 
                              className="h-4 w-4 sm:h-5 sm:w-5 mr-3 mt-0.5 shrink-0" 
                              style={{ color: 'var(--color-green-fern)' }} 
                            />
                            <span 
                              className="text-sm sm:text-base"
                              style={{ color: 'var(--color-white-70)' }}
                            >
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}