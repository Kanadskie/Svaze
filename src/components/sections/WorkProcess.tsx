'use client'

import { motion } from 'framer-motion'
import { ChevronDown, CircleArrowRight, CheckCircle, BookmarkCheck, Target, Users, Zap, Lightbulb, BarChart3, GraduationCap, Footprints, CircleQuestionMark, MessageCircleQuestionMark, Pin } from 'lucide-react'
import { useState } from 'react'

const workStages = [
  {
    number: '1',
    title: 'Профилирование',
    description: 'Мы начинаем с индивидуального профилирования. Вы получаете чёткое понимание:',
    points: [
      'как вы воспринимаете информацию',
      'что вас мотивирует',
      'как вы реагируете на стресс',
      'почему в коммуникации возникают повторяющиеся сложности'
    ],
    result: 'Результат — ваш персональный профиль коммуникации, с расшифровкой на 30 страницах.',
    detailedDescription: {
      intro: 'Обучение эффективной коммуникации начинается с понимания себя. Именно поэтому первым шагом становится профилирование.',
      sections: [
        {
          icon: Target,
          title: 'Что такое профилирование?',
          content: <>Это диагностический инструмент, который помогает увидеть, как устроена ваша личность и поведение в общении. Профилирование опирается на модель, выделяющую шесть базовых типов, присутствующих в каждом человеке: <span style={{color: 'var(--color-accent)', fontWeight: 600}}>Логик / Упорный / Бунтарь / Деятель / Душевный / Мечтатель</span></>
        },
        {
          icon: BarChart3,
          title: 'Уникальная комбинация',
          content: 'У каждого из нас — своя уникальная комбинация этих типов. Профилирование позволяет понять, какое именно сочетание характерно для вас и как оно влияет на ваши реакции, решения и стиль коммуникации.'
        },
        {
          icon: Footprints,
          title: 'Как можно пройти профилирование?',
          content: '',
          items: [
            'Через участие в базовом семинаре: это формат, который даёт целостное представление о структуре личности, ключевых потребностей, мотивации и особенностях общения.',
            'В формате индивидуальной консультации: вы проходите диагностику и подробно разбираете свой профиль со специалистом, получая персональные рекомендации под вашу ситуацию.'
          ]
        }
      ],
      note: 'Если вы руководитель и хотите работать с коммуникацией в команде — можно провести профилирование сотрудников и организовать корпоративный формат обучения. Оставьте заявку на сайте — мы подберём решение под вашу задачу.'
    }
  },
  {
    number: '2',
    title: 'Индивидуальная работа или групповое обучение',
    description: 'Дальнейший формат мы выбираем под вашу задачу.',
    subsections: [
      {
        title: 'Индивидуальная консультация',
        description: 'Подходит, если важно:',
        points: [
          'разобрать конкретные ситуации',
          'изменить паттерны общения',
          'научиться управлять стрессом и реакциями',
          'повысить ясность и уверенность в диалогах'
        ]
      },
      {
        title: 'Тренинг по коммуникациям (1–2 дня)',
        description: 'Формат для тех, кто хочет:',
        points: [
          'прокачать навыки общения в работе и жизни',
          'научиться слышать других и быть услышанным',
          'отработать сложные диалоги на практике',
          'получить инструменты по выходу из стресса'
        ]
      }
    ],
    detailedDescription: {
      intro: '',
      trainings: [
        {
          icon: GraduationCap,
          title: 'Базовый тренинг (PCM-1)',
          description: 'Базовый семинар (PCM-1) — это отправная точка в изучении модели и работе с коммуникацией. На этом этапе вы находите ответы на ключевые вопросы',
          questions: [
            {
              title: 'Кто я в коммуникации',
              content: 'Мои сильные стороны, внутренние потребности и привычные сценарии поведения. Что помогает мне восстанавливаться и чувствовать себя устойчиво, а что, наоборот, приводит к напряжению и стрессу — и как поддерживать состояние баланса.'
            },
            {
              title: 'Как устроены другие люди',
              content: 'Вы начинаете лучше понимать мотивы и особенности поведения окружающих — почему люди реагируют именно так и что за этим стоит.'
            },
            {
              title: 'Как выстраивать общение эффективно',
              content: 'Осваиваете подходы, которые помогают находить контакт с разными людьми и быть услышанным.'
            }
          ],
          details: [
            'До начала семинара вы проходите профилирование, чтобы получить представление о своей личностной структуре.',
            'Во время обучения вы получаете индивидуальный профиль с подробной расшифровкой (около 30 страниц), где собрана системная информация о вас.'
          ],
          includes: {
            title: 'Что включает базовый семинар:',
            items: [
              'Теоретическую часть: типы личности, их особенности, фильтры восприятия, каналы взаимодействия, реакции на стресс и другие важные элементы коммуникации.',
              'Практические инструменты: подходы и техники для выстраивания эффективного общения с разными типами людей.',
              'Практику в группе: отработку навыков и закрепление инструментов в живом взаимодействии.'
            ]
          },
          result: 'Результат: интенсивное обучение с большим количеством инсайтов и практических открытий.'
        },
        {
          icon: GraduationCap,
          title: 'Продвинутый тренинг (PCM-2)',
          description: 'Если вы прошли базовый семинар PCM-1, у вас уже есть понимание, как работает эта модель. Теперь пришлось время для следующего шага',
          objectives: [
            'Узнаете, как выявлять мотивацию людей и общаться с ними так, чтобы не вводить в стресс',
            'Научитесь распознавать свои и чужие эмоциональные паттерны, чтобы предотвращать конфликты прежде, чем они успеют разгореться',
            'Поймёте, как возвращать людей из стресса и восстанавливать конструктивное общение, когда ситуация уже вышла из-под контроля'
          ]
        }
      ]
    }
  }
]

export default function WorkProcess() {
  const [openDetailed, setOpenDetailed] = useState<Record<number, boolean>>({})

  const toggleDetailed = (stageIndex: number) => {
    setOpenDetailed(prev => ({
      ...prev,
      [stageIndex]: !prev[stageIndex]
    }))
  }

  return (
    <section 
      id="work-process" 
      className="section-padding relative"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface) 100%)'
      }}
    >
      <div className="container-custom px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span 
                className="uppercase inline-block"
                style={{ color: 'var(--color-neutral-dark)' }}
              >Как проходит</span>
              <span 
                className="uppercase inline-block ml-2"
                style={{ color: 'var(--color-warm-accent)' }}
              > работа со мной</span>
            </h2>
            <p 
              className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Коммуникация начинается с понимания себя. Поэтому работа со мной строится поэтапно — от диагностики к практике.
            </p>
          </motion.div>

          <div className="relative">
            {/* Этапы работы */}
            <div className="space-y-12 md:space-y-18">
              {workStages.map((stage, stageIndex) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: stageIndex * 0.2 
                  }}
                  className="relative"
                >
                  {/* Круг с цифрой */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    {/* Круг */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5,
                        delay: stageIndex * 0.2 + 0.1
                      }}
                      className="relative z-10 flex-shrink-0"
                    >
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center border-4"
                        style={{
                          borderColor: 'var(--color-accent)'
                        }}
                      >
                        <span 
                          className="text-4xl md:text-5xl font-bold"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          {stage.number}
                        </span>
                      </div>
                    </motion.div>

                    {/* Контент */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5,
                        delay: stageIndex * 0.2 + 0.2
                      }}
                      className="flex-1 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl shadow-sm"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      {/* Заголовок этапа */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stageIndex * 0.2 + 0.3 }}
                        className="text-lg md:text-xl font-bold mb-4 md:mb-6"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {stage.title}
                      </motion.h3>

                      {/* Основное описание */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stageIndex * 0.2 + 0.35 }}
                        className="text-sm sm:text-base mb-4 leading-relaxed"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {stage.description}
                      </motion.p>

                      {/* Пункты */}
                      {stage.points && (
                        <div className="space-y-2 mb-4">
                          {stage.points.map((point, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: stageIndex * 0.2 + 0.4 + i * 0.1 }}
                              className="flex items-start"
                            >
                              <CircleArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 flex-shrink-0" 
                                style={{ color: 'var(--color-warm-accent)' }} />
                              <span 
                                className="text-sm sm:text-base"
                                style={{ color: 'var(--color-primary)' }}
                              >
                                {point}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Подразделы */}
                      {stage.subsections && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stageIndex * 0.2 + 0.5 }}
                          className="mb-6"
                        >
                          <div className="flex flex-col md:flex-row gap-4">
                            {stage.subsections.map((subsection, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: stageIndex * 0.2 + 0.6 + i * 0.1 }}
                                className="flex-1 rounded-lg p-4 shadow-sm"
                                style={{
                                  background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                                  border: '1px solid var(--color-border)'
                                }}
                              >
                                <h4 
                                  className="font-medium text-base md:text-lg mb-2"
                                  style={{ 
                                    color: 'var(--color-accent)',
                                  }}
                                >
                                  {subsection.title}
                                </h4>
                                {subsection.description && (
                                  <p 
                                    className="text-sm sm:text-base mb-3"
                                    style={{ color: 'var(--color-primary)' }}
                                  >
                                    {subsection.description}
                                  </p>
                                )}
                                <div className="space-y-2">
                                  {subsection.points.map((point, j) => (
                                    <motion.div
                                      key={j}
                                      initial={{ opacity: 0, x: -5 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: stageIndex * 0.2 + 0.7 + j * 0.05 }}
                                      className="flex items-start"
                                    >
                                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" 
                                        style={{ color: 'var(--color-warm-accent)' }} />
                                      <span 
                                        className="text-sm sm:text-base"
                                        style={{ color: 'var(--color-primary)' }}
                                      >
                                        {point}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Результат */}
                      {stage.result && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: stageIndex * 0.2 + 0.8 }}
                          className="mb-6 p-4 rounded-lg"
                          style={{ 
                            background: 'rgba(54, 106, 93, 0.05)',
                            borderLeft: '3px solid var(--color-accent)'
                          }}
                        >
                          <p 
                            className="text-sm sm:text-base italic"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            {stage.result}
                          </p>
                        </motion.div>
                      )}

                      {/* Подробное описание (аккордеон) */}
                      {stage.detailedDescription && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stageIndex * 0.2 + 0.9 }}
                          className="mb-6 shadow-sm rounded-lg overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                            border: '1px solid var(--color-border)'
                          }}
                        >
                          <button
                            onClick={() => toggleDetailed(stageIndex)}
                            className="w-full p-4 sm:p-5 flex items-center justify-between bg-surface transition-colors duration-200 hover:bg-surface/50"
                            style={{
                              background: 'rgba(54, 106, 93, 0.05)'
                            }}
                          >
                            <div className="flex items-center gap-3 sm:gap-4">
                              <motion.div
                                animate={{ rotate: openDetailed[stageIndex] ? 360 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center"
                              >
                                <BookmarkCheck className="w-5 h-5" style={{ color: 'var(--color-surface)' }} />
                              </motion.div>
                              <span 
                                className="font-medium text-base md:text-lg"
                                style={{ color: 'var(--color-primary)' }}
                              >
                                Подробнее
                              </span>
                            </div>
                            <motion.div
                              animate={{ rotate: openDetailed[stageIndex] ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown 
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                style={{ color: 'var(--color-accent)' }}
                              />
                            </motion.div>
                          </button>
                          
                          {openDetailed[stageIndex] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 px-4 sm:px-5 pb-4 sm:pb-5">
                                {stage.detailedDescription.intro && (
                                  <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-sm sm:text-base mb-6 leading-relaxed"
                                    style={{ color: 'var(--color-primary)' }}
                                  >
                                    {stage.detailedDescription.intro}
                                  </motion.p>
                                )}

                                {stage.detailedDescription.sections?.map((section, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="mb-6 last:mb-0"
                                  >
                                    <div className="flex items-center md:items-start gap-3 mb-3">
                                      <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"
                                      >
                                        <section.icon className="w-5 h-5" style={{ color: 'var(--color-surface)' }} />
                                      </motion.div>
                                      <h4 
                                        className="font-medium text-base md:text-lg pt-0 md:pt-2"
                                        style={{ color: 'var(--color-primary)' }}
                                      >
                                        {section.title}
                                      </h4>
                                    </div>
                                    {section.content && (
                                      <p 
                                        className="text-sm sm:text-base mb-4 leading-relaxed ml-13"
                                        style={{ color: 'var(--color-primary)' }}
                                      >
                                        {section.content}
                                      </p>
                                    )}
                                    {section.items && (
                                      <div className="space-y-2 ml-13">
                                        {section.items.map((item, j) => (
                                          <motion.div
                                            key={j}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + j * 0.05 }}
                                            className="flex items-start"
                                          >
                                            <CheckCircle className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" 
                                              style={{ color: 'var(--color-warm-accent)' }} />
                                            <span 
                                              className="text-sm sm:text-base"
                                              style={{ color: 'var(--color-primary)' }}
                                            >
                                              {item}
                                            </span>
                                          </motion.div>
                                        ))}
                                      </div>
                                    )}
                                  </motion.div>
                                ))}

                                {stage.detailedDescription.trainings?.map((training, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="mb-6 rounded-lg p-2 md:p-5 last:mb-0"
                                  >
                                    <div className="flex items-center md:items-start gap-3 mb-4">
                                      <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"
                                      >
                                        <training.icon className="w-5 h-5" style={{ color: 'var(--color-surface)' }} />
                                      </motion.div>
                                      <h4 
                                        className="font-medium text-base md:text-lg pt-0 md:pt-2"
                                        style={{ color: 'var(--color-primary)' }}
                                      >
                                        {training.title}
                                      </h4>
                                    </div>
                                    
                                    {training.description && (
                                      <p 
                                        className="text-sm sm:text-base mb-4 leading-relaxed"
                                        style={{ color: 'var(--color-primary)' }}
                                      >
                                        {training.description}
                                      </p>
                                    )}
                                    
                                    {training.questions && (
                                      <div className="space-y-3 mb-2">
                                        {training.questions.map((question, j) => (
                                          <motion.div
                                            key={j}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + j * 0.1 }}
                                            className="ml-13"
                                          >
                                            <div className='flex items-center mb-2'>
                                              <div>
                                                <CircleQuestionMark className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" 
                                                  style={{ color: 'var(--color-accent)' }} />
                                              </div>
                                              <h5 
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--color-accent)' }}
                                              >
                                                {question.title}
                                              </h5>
                                            </div>

                                            <p 
                                              className="text-sm sm:text-base"
                                              style={{ color: 'var(--color-primary)' }}
                                            >
                                              {question.content}
                                            </p>
                                          </motion.div>
                                        ))}
                                      </div>
                                    )}
                                    
                                    {training.details && (
                                      <div className="space-y-2 mt-8 mb-2">
                                        {training.details.map((detail, j) => (
                                          <motion.div
                                            key={j}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + j * 0.1 }}
                                            className="flex items-start ml-13 mb-3"
                                          >
                                            <motion.div
                                              whileHover={{ scale: 1.1 }}
                                              className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"
                                            >
                                              <Pin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--color-surface)' }} />
                                            </motion.div>
                                            <p className="text-sm sm:text-base ml-3"
                                              style={{ color: 'var(--color-primary)' }}>
                                              {detail}
                                            </p>
                                          </motion.div>
                                        ))}
                                      </div>
                                    )}
                                    
                                    {training.includes && (
                                      <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="mt-8 mb-2"
                                      >
                                        <h5 
                                          className="font-medium text-sm sm:text-base mb-3 ml-13"
                                          style={{ color: 'var(--color-primary)' }}
                                        >
                                          {training.includes.title}
                                        </h5>
                                        <div className="space-y-3 ml-13">
                                          {training.includes.items.map((item, j) => (
                                            <motion.div
                                              key={j}
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: 0.8 + j * 0.05 }}
                                              className="flex items-start gap-3"
                                            >
                                              <CircleArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-1 mt-0.5 flex-shrink-0" 
                                                style={{ color: 'var(--color-warm-accent)' }} />
                                              <span 
                                                className="text-sm sm:text-base"
                                                style={{ color: 'var(--color-primary)' }}
                                              >
                                                {item}
                                              </span>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                    
                                    {training.objectives && (
                                      <div className="space-y-2">
                                        {training.objectives.map((objective, j) => (
                                          <motion.div
                                            key={j}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.9 + j * 0.05 }}
                                            className="flex items-start gap-3"
                                          >
                                            <CircleArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-1 mt-0.5 flex-shrink-0" 
                                              style={{ color: 'var(--color-warm-accent)' }} />
                                            <span 
                                              className="text-sm sm:text-base"
                                              style={{ color: 'var(--color-primary)' }}
                                            >
                                              {objective}
                                            </span>
                                          </motion.div>
                                        ))}
                                      </div>
                                    )}
                                    
                                    {training.result && (
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.0 }}
                                        className="mt-4 p-4 rounded-lg ml-13"
                                        style={{ 
                                          background: 'rgba(54, 106, 93, 0.05)',
                                          borderLeft: '2px solid var(--color-accent)'
                                        }}
                                      >
                                        <p 
                                          className="text-sm sm:text-base italic"
                                          style={{ color: 'var(--color-primary)' }}
                                        >
                                          {training.result}
                                        </p>
                                      </motion.div>
                                    )}
                                  </motion.div>
                                ))}

                                {stage.detailedDescription.note && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1 }}
                                    className="mb-6 p-4 rounded-lg"
                                    style={{ 
                                      background: 'rgba(54, 106, 93, 0.05)',
                                      borderLeft: '3px solid var(--color-accent)'
                                    }}
                                  >
                                    <p 
                                      className="text-sm sm:text-base italic"
                                      style={{ color: 'var(--color-primary)' }}
                                    >
                                      {stage.detailedDescription.note}
                                    </p>
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Кнопка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 md:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 hover:shadow-xl"
              style={{ 
                background: 'var(--color-accent)',
                color: 'surface',
              }}
            >
              Обсудить мой запрос
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}