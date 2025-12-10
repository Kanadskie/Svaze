'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Если используете импорт изображений
import pcmImage from '@/assets/certificates/pcm.jpg'
import chetkospeeachImage from '@/assets/certificates/chetkospeeach.jpg'
import trainertrainingImage from '@/assets/certificates/trainertraining.jpg'

const certificates = [
  {
    id: 1,
    title: 'Certified Trainer PCM Certificate',
    issuer: 'PCM',
    year: '2025',
    image: pcmImage,
  },
  {
    id: 2,
    title: 'Chetkospeech Diploma',
    issuer: 'Chetkospeech',
    year: '2025',
    image: chetkospeeachImage,
  },
  {
    id: 3,
    title: 'Trainers Training Certificate',
    issuer: 'Kazakova Ekaterina',
    year: '2025',
    image: trainertrainingImage,
  }
]

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentCert = certificates[currentIndex]

  return (
    <section id="certificates" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-accent uppercase">Сертификаты</span>
              <span className="text-neutral-dark uppercase"> и дипломы</span>
            </h2>
            
            <p className="text-lg text-neutral-dark/60 max-w-3xl mx-auto">
              Подтвержденная экспертиза
            </p>
          </motion.div>

          {/* Основная карусель */}
          <div className="mb-8">
            <div className="relative px-4 sm:px-6 md:px-0">
              {/* Контейнер для ограничения ширины */}
              <div className="relative max-w-2xl lg:max-w-3xl mx-auto">
                {/* Основное изображение */}
                <motion.div
                  key={currentCert.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                >
                  <img src={currentCert.image} alt={currentCert.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                {/* Навигационные стрелки - на границах изображения */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 sm:p-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 sm:p-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            {/* Индикатор */}
            <div className="flex justify-center gap-2 mt-4">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}