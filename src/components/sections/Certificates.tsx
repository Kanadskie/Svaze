'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Если используете импорт изображений
import pcmImage from '@/assets/certificates/pcm.jpg'
import chetkospeeachImage from '@/assets/certificates/chetkospeeach.jpg'
import trainertrainingImage from '@/assets/certificates/trainertraining.jpg'

// Определяем тип для изображений
type ImageType = string | { src: string }

const certificates = [
  {
    id: 1,
    title: 'Certified Trainer PCM Certificate',
    issuer: 'PCM',
    year: '2025',
    image: pcmImage as ImageType,
  },
  {
    id: 2,
    title: 'Chetkospeech Diploma',
    issuer: 'Chetkospeech',
    year: '2025',
    image: chetkospeeachImage as ImageType,
  },
  {
    id: 3,
    title: 'Trainers Training Certificate',
    issuer: 'Kazakova Ekaterina',
    year: '2025',
    image: trainertrainingImage as ImageType,
  }
]

// Функция для получения URL изображения
const getImageUrl = (image: ImageType): string => {
  if (typeof image === 'string') {
    return image
  }
  return image.src
}

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(certificates.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  // Предзагружаем все изображения
  useEffect(() => {
    const loadPromises = certificates.map((cert, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.src = getImageUrl(cert.image)
        img.onload = () => {
          setImagesLoaded(prev => {
            const newLoaded = [...prev]
            newLoaded[index] = true
            return newLoaded
          })
          resolve()
        }
        img.onerror = () => {
          console.error(`Failed to load image: ${cert.title}`)
          setImagesLoaded(prev => {
            const newLoaded = [...prev]
            newLoaded[index] = true
            return newLoaded
          })
          resolve()
        }
      })
    })

    Promise.all(loadPromises)
  }, [])

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
  const isImageLoaded = imagesLoaded[currentIndex]
  const allImagesLoaded = imagesLoaded.every(loaded => loaded)

  return (
    <section 
      id="certificates" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface) 100%)'
      }}
    >
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
              <span style={{ color: 'var(--color-warm-accent)' }} className="uppercase">Сертификаты</span>
              <span style={{ color: 'var(--color-neutral-dark)' }} className="uppercase"> и дипломы</span>
            </h2>
            
            <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto"
               style={{ color: 'var(--color-neutral-dark)' }}>
              Подтвержденная экспертиза
            </p>
          </motion.div>

          {/* Основная карусель */}
          <div className="mb-8">
            <div className="relative px-4 sm:px-6 md:px-0">
              {/* Контейнер для ограничения ширины */}
              <div ref={containerRef} className="relative max-w-2xl lg:max-w-3xl mx-auto">
                {/* Основное изображение с ФИКСИРОВАННОЙ ВЫСОТОЙ КОНТЕЙНЕРА */}
                <div 
                  className="relative rounded-xl overflow-hidden shadow-sm"
                  style={{
                    height: 'auto',
                    minHeight: '200px',
                    aspectRatio: '4/3',
                    backgroundColor: 'white',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <motion.div
                    key={currentCert.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isImageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    <img 
                      src={getImageUrl(currentCert.image)}
                      alt={currentCert.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }} 
                      loading="eager"
                    />
                  </motion.div>
                  
                  {/* Простой статичный бэкграунд вместо анимации */}
                  {!isImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center"
                         style={{ backgroundColor: 'var(--color-surface)' }}>
                      <div style={{ color: 'var(--color-neutral-dark)' }} className="text-sm">
                        Загрузка...
                      </div>
                    </div>
                  )}
                </div>

                {/* Навигационные стрелки */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                    color: 'var(--color-white)'
                  }}
                  disabled={!allImagesLoaded}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                    color: 'var(--color-white)'
                  }}
                  disabled={!allImagesLoaded}
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
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8' 
                      : 'w-3'
                  }`}
                  style={{
                    backgroundColor: index === currentIndex 
                      ? 'var(--color-accent)' 
                      : 'var(--color-border)'
                  }}
                  disabled={!allImagesLoaded}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}