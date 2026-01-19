'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Users2, Crown, CheckCircle, Handshake, ChevronDown, User, Users, CircleArrowRight, Bookmark, Award, HandCoins, BookmarkCheck, BriefcaseBusiness, Landmark, Coins } from 'lucide-react'
import businessPhoto from '../../assets/images/p2.jpg'
import { useState } from 'react'

const businessSections = [
  {
    icon: Users2,
    title: 'Для HR и специалистов по работе с людьми',
    description: 'PCM помогает HR видеть не «ролики и резюме», а людей с их мотивацией, стрессовыми реакциями и стилем взаимодействия. Это инструмент, который делает HR не обслуживающей функцией, а партнёром бизнеса в подборе, адаптации и удержании сотрудников.',
    benefits: [
      'Увеличение точности отбора кандидатов',
      'Предотвращение конфликтов и выгорания',
      'Укрепление командной динамики',
      'Снижение текучести за счёт понимания личных мотиваций',
      'Улучшение качества внутренних коммуникаций и обратной связи'
    ],
    tariffs: {
      personal: 'Индивидуальный тренинг для HR-специалиста',
      team: 'Корпоративный тренинг для HR-отдела',
      pricePerPerson: 'от 15 000 ₽',
      includes: [
        'Диагностика коммуникативного профиля',
        'Персональная обратная связь',
        'Рабочая тетрадь с инструментами',
        '3 месяца поддержки в чате',
        'Сертификат о прохождении'
      ]
    }
  },
  {
    icon: BriefcaseBusiness,
    title: 'Для руководителей',
    description: 'Руководителям приходится общаться на всех уровнях — с собственниками, коллегами, командами. И часто результат зависит не от стратегии, а от того, как выстроен контакт.',
    benefits: [
      'Понимание, как общаться с разными типами сотрудников',
      'Проведение сложных переговоров без потери баланса',
      'Замечать стрессовое поведение и корректировать его',
      'Эффективно управлять без микроменеджмента',
      'Усиливать влияние через точную и живую коммуникацию'
    ],
    tariffs: {
      personal: 'Индивидуальный коучинг для руководителя',
      team: 'Тренинг для управленческой команды',
      pricePerPerson: 'от 25 000 ₽',
      includes: [
        'Анализ коммуникаций в команде',
        'Кейсы из вашей практики',
        'Инструменты для ежедневного применения',
        'Индивидуальные рекомендации',
        'План внедрения изменений'
      ]
    }
  },
  {
    icon: Landmark,
    title: 'Для собственников',
    description: 'Для собственников PCM — это инструмент, который помогает видеть компанию как организм, где каждый элемент связан коммуникацией.',
    benefits: [
      'Укрепление корпоративной культуры',
      'Повышение управляемости и прозрачности процессов',
      'Развитие лидеров второго уровня',
      'Улучшение стратегических решений через качественный диалог',
      'Создание системы, где коммуникации поддерживают рост'
    ],
    tariffs: {
      personal: 'Стратегическая сессия для собственника',
      team: 'Тренинг для топ-команды',
      pricePerPerson: 'от 35 000 ₽',
      includes: [
        'Диагностика корпоративной культуры',
        'Рекомендации по развитию лидерства',
        'Инструменты для масштабирования',
        'Индивидуальный план изменений',
        'Годовое сопровождение'
      ]
    }
  },
  {
    icon: Handshake,
    title: 'Для команд',
    description: 'PCM помогает командам понять различия в стилях общения, реакциях на стресс и сильных сторонах участников. Это снижает личное напряжение и переводит сложные ситуации в поле рационального диалога.',
    benefits: [
      'Понимание себя и коллег без ярлыков',
      'Раннее распознавание стрессовых реакций',
      'Инструменты выхода из стресса — для себя и других',
      'Меньше конфликтов внутри команды',
      'Проще взаимодействие между подразделениями',
      'Более ясный диалог между руководителями и сотрудниками'
    ],
    tariffs: {
      personal: 'Индивидуальные сессии для членов команды',
      team: 'Командный тренинг по коммуникациям',
      pricePerPerson: 'от 12 000 ₽',
      includes: [
        'Диагностика командной динамики',
        'Индивидуальные профили участников',
        'Командные упражнения и кейсы',
        'План развития команда',
        'Фоллоу-ап сессия через месяц'
      ]
    }
  }
]

export default function Business() {
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({})

  const toggleAccordion = (sectionIndex: number) => {
    setOpenAccordions(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }))
  }

  return (
    <section 
      id="business" 
      className="section-padding relative bg-primary"
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
                className="uppercase inline-block"
                style={{ color: 'var(--color-accent)' }}
              >Для</span>
              <span 
                className="uppercase ml-1 md:ml-2 inline-block"
                style={{ color: 'var(--color-surface)' }}
              > бизнеса</span>
            </h2>
            <p 
              className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              style={{ color: 'var(--color-surface)' }}
            >
              Коммуникация как управленческий инструмент
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
                      borderColor: 'var(--color-faded-copper)',
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
                          borderRadius: '10px'
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
                    style={{ color: 'var(--color-surface)' }}
                  >
                    "Эффективная коммуникация — это стратегическое преимущество бизнеса"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Правая часть - Контент */}
            <div className="lg:w-2/3 space-y-6 md:space-y-8">
              {businessSections.map((section, index) => {
                const isTariffsOpen = openAccordions[index]

                return (
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
                      {/* Левая колонка - Заголовок и иконка */}
                      <div className="md:w-1/4">
                        <div 
                          className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center"
                          style={{
                            background: 'rgba(54, 106, 93, 0.2)'
                          }}
                        >
                          <section.icon 
                            className="h-7 w-7" 
                            style={{ color: 'var(--color-accent)' }} 
                          />
                        </div>
                        <h3 
                          className="text-lg font-bold mb-4"
                          style={{ color: 'var(--color-surface)' }}
                        >
                          {section.title}
                        </h3>
                      </div>
                      
                      {/* Правая колонка - Описание и Результат (всегда видимы) */}
                      <div className="md:w-3/4">
                        {/* Описание */}
                        <div className="mb-6">
                          <p 
                            className="text-sm sm:text-base leading-relaxed"
                            style={{ color: 'var(--color-white-80)' }}
                          >
                            {section.description}
                          </p>
                          
                          {/* Дополнительный текст для некоторых секций */}
                          {section.title === 'Для HR и специалистов по работе с людьми' && (
                            <p 
                              className="mt-3 text-sm sm:text-base leading-relaxed"
                              style={{ color: 'var(--color-white-80)' }}
                            >
                              Эта модель делает HR не просто администратором процессов, а стратегическим партнёром, который выстраивает культуру живого, понятного и экологичного общения внутри компании.
                            </p>
                          )}
                          
                          {section.title === 'Для руководителей' && (
                            <p 
                              className="mt-3 text-sm sm:text-base leading-relaxed"
                              style={{ color: 'var(--color-white-80)' }}
                            >
                              Результат — команда, которая слышит руководителя с полуслова, атмосфера доверия и управляемость без давления.
                            </p>
                          )}
                          
                          {section.title === 'Для собственников' && (
                            <p 
                              className="mt-3 text-sm sm:text-base leading-relaxed"
                              style={{ color: 'var(--color-white-80)' }}
                            >
                              Такой бизнес становится живым, устойчивым и чутким к изменениям. И всё начинается с простого — осознанного разговора.
                            </p>
                          )}
                        </div>

                        {/* Результат */}
                        <div className="mb-8">
                          <div className="space-y-2 sm:space-y-3">
                            {section.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start">
                                <CheckCircle 
                                  className="h-4 w-4 sm:h-5 sm:w-5 mr-3 mt-0.5 shrink-0" 
                                  style={{ color: 'var(--color-warm-accent)' }} 
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

                        {/* Тарифы (аккордеон) */}
                        <div className="border border-white/10 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full p-4 sm:p-5 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                          >
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                <HandCoins className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--color-accent)' }} />
                              </div>
                              <span 
                                className="font-medium text-sm sm:text-base"
                                style={{ color: 'var(--color-surface)' }}
                              >
                                Тарифы
                              </span>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                                isTariffsOpen ? 'rotate-180' : ''
                              }`}
                              style={{ color: 'var(--color-accent)' }}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isTariffsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 px-4 sm:px-5 pb-4 sm:pb-5">
                                  {/* Личный и командный тренинг */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white/5 rounded-lg p-4">
                                      <div className="flex items-center gap-2 mb-3">
                                        <User className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                        <h4 
                                          className="font-medium text-sm sm:text-base"
                                          style={{ color: 'var(--color-surface)' }}
                                        >
                                          Личный тренинг
                                        </h4>
                                      </div>
                                      <p 
                                        className="text-sm text-white/70"
                                        style={{ color: 'var(--color-white-70)' }}
                                      >
                                        {section.tariffs.personal}
                                      </p>
                                    </div>

                                    <div className="bg-white/5 rounded-lg p-4">
                                      <div className="flex items-center gap-2 mb-3">
                                        <Users className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                        <h4 
                                          className="font-medium text-sm sm:text-base"
                                          style={{ color: 'var(--color-surface)' }}
                                        >
                                          Командный тренинг
                                        </h4>
                                      </div>
                                      <p 
                                        className="text-sm text-white/70"
                                        style={{ color: 'var(--color-white-70)' }}
                                      >
                                        {section.tariffs.team}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Цена за человека */}
                                  <div className="bg-gradient-to-r from-accent/10 to-green-fern/10 rounded-lg mb-8">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                      <div className="flex items-center gap-2">
                                        <Coins className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                        <span 
                                          className="font-medium text-sm sm:text-base"
                                          style={{ color: 'var(--color-surface)' }}
                                        >
                                          Цена за 1 человека
                                        </span>
                                      </div>
                                      <span 
                                        className="text-xl sm:text-2xl font-bold"
                                        style={{ color: 'var(--color-warm-accent)' }}
                                      >
                                        {section.tariffs.pricePerPerson}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Что входит в тренинг */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-3">
                                      <BookmarkCheck className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                      <h4 
                                        className="font-medium text-sm sm:text-base"
                                        style={{ color: 'var(--color-surface)' }}
                                      >
                                        Что входит в тренинг
                                      </h4>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {section.tariffs.includes.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 sm:p-4">
                                          <CircleArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" 
                                            style={{ color: 'var(--color-warm-accent)' }} />
                                          <span 
                                            className="text-sm text-white/80 leading-relaxed"
                                            style={{ color: 'var(--color-white-80)' }}
                                          >
                                            {item}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}