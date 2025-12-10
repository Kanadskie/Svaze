'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, Loader2 } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Знакомство с Моделью Процесса Коммуникаций (PCM)',
    description: 'Тут коротко лучше описать содержание',
    videoUrl: '/videos/v1.mp4',
    thumbnail: '',
  },
  {
    id: 2,
    title: 'Коммуникации - ключ к успеху!',
    description: 'Тут коротко лучше описать содержание',
    videoUrl: '/videos/v2.mp4',
    thumbnail: '',
  }
]

export default function Videos() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null)
  const [loadingVideoId, setLoadingVideoId] = useState<number | null>(null)
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({})
  const [playingStates, setPlayingStates] = useState<Record<number, boolean>>({})
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})
  const containerRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const handleVideoClick = useCallback(async (videoId: number) => {
    const videoElement = videoRefs.current[videoId]
    if (!videoElement) return

    requestAnimationFrame(async () => {
      // Если кликаем на уже активное видео
      if (activeVideoId === videoId) {
        if (!videoElement.paused) {
          videoElement.pause()
          setPlayingStates(prev => ({...prev, [videoId]: false}))
        } else {
          try {
            await videoElement.play()
            setPlayingStates(prev => ({...prev, [videoId]: true}))
          } catch (error) {
            console.error('Ошибка воспроизведения:', error)
          }
        }
      } else {
        // Останавливаем текущее видео
        if (activeVideoId && videoRefs.current[activeVideoId]) {
          const prevVideo = videoRefs.current[activeVideoId]
          if (prevVideo) {
            prevVideo.pause()
            prevVideo.currentTime = 0
            setPlayingStates(prev => ({...prev, [activeVideoId]: false}))
          }
        }
        
        // Запускаем новое видео
        setActiveVideoId(videoId)
        setLoadingVideoId(videoId)
        
        try {
          videoElement.currentTime = 0
          await videoElement.play()
          setPlayingStates(prev => ({...prev, [videoId]: true}))
          setLoadingVideoId(null)
        } catch (error) {
          console.error('Ошибка воспроизведения:', error)
          setLoadingVideoId(null)
        }
      }
    })
  }, [activeVideoId])

  const toggleMute = useCallback((videoId: number) => {
    const videoElement = videoRefs.current[videoId]
    if (!videoElement) return

    videoElement.muted = !videoElement.muted
    setMutedStates(prev => ({
      ...prev,
      [videoId]: videoElement.muted
    }))
  }, [])

  useEffect(() => {
    const loadVideos = () => {
      videos.forEach(video => {
        const videoElement = videoRefs.current[video.id]
        if (videoElement) {
          videoElement.preload = 'metadata'
          videoElement.load()
          
          // Звук включен по умолчанию
          videoElement.muted = false
          
          // Инициализируем состояния
          setMutedStates(prev => ({
            ...prev,
            [video.id]: false // false = не muted, звук включен
          }))
          setPlayingStates(prev => ({
            ...prev,
            [video.id]: false // изначально видео не играет
          }))
        }
      })
    }

    const timer = setTimeout(loadVideos, 100)
    return () => clearTimeout(timer)
  }, [])

  // Обновляем состояние воспроизведения при событиях видео
  useEffect(() => {
    const handlePlay = (videoId: number) => {
      setPlayingStates(prev => ({...prev, [videoId]: true}))
    }
    
    const handlePause = (videoId: number) => {
      setPlayingStates(prev => ({...prev, [videoId]: false}))
    }
    
    const handleEnded = (videoId: number) => {
      setPlayingStates(prev => ({...prev, [videoId]: false}))
      if (activeVideoId === videoId) {
        setActiveVideoId(null)
      }
    }

    // Добавляем обработчики для каждого видео
    videos.forEach(video => {
      const videoElement = videoRefs.current[video.id]
      if (videoElement) {
        videoElement.addEventListener('play', () => handlePlay(video.id))
        videoElement.addEventListener('pause', () => handlePause(video.id))
        videoElement.addEventListener('ended', () => handleEnded(video.id))
      }
    })

    return () => {
      videos.forEach(video => {
        const videoElement = videoRefs.current[video.id]
        if (videoElement) {
          videoElement.removeEventListener('play', () => handlePlay(video.id))
          videoElement.removeEventListener('pause', () => handlePause(video.id))
          videoElement.removeEventListener('ended', () => handleEnded(video.id))
        }
      })
    }
  }, [activeVideoId])

  const toggleFullscreen = useCallback(async (videoId: number) => {
    const container = containerRefs.current[videoId]
    if (!container) return

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('Ошибка полноэкранного режима:', error)
    }
  }, [])

  return (
    <section id="videos" className="section-padding bg-[#485320]">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок с анимацией */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span 
                className="text-accent uppercase inline-block"
                style={{
                  animation: 'fadeInUp 0.6s ease-out'
                }}
              >
                Видео
              </span>
              <span 
                className="text-white uppercase inline-block ml-2"
                style={{
                  animation: 'fadeInUp 0.6s ease-out 0.2s both'
                }}
              >
                материалы
              </span>
            </h2>
            <p 
              className="text-lg text-white/80 max-w-3xl mx-auto"
              style={{
                animation: 'fadeInUp 0.6s ease-out 0.4s both'
              }}
            >
              Практические материалы и разборы реальных кейсов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => {
              const isActive = activeVideoId === video.id
              const isPlaying = playingStates[video.id] || false
              const isMuted = mutedStates[video.id] ?? false

              return (
                <div 
                  key={video.id} 
                  ref={el => {
                    if (el) {
                      containerRefs.current[video.id] = el
                    }
                  }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.2}s both`
                  }}
                >
                  <div className="relative aspect-video bg-black overflow-hidden">
                    <video
                      ref={el => {
                        if (el) {
                          videoRefs.current[video.id] = el
                        }
                      }}
                      src={video.videoUrl}
                      className="w-full h-full object-cover video-optimized"
                      preload="metadata"
                      muted={isMuted}
                      playsInline
                      disablePictureInPicture
                      onClick={() => handleVideoClick(video.id)}
                      onLoadedData={() => {
                        if (loadingVideoId === video.id) {
                          setLoadingVideoId(null)
                        }
                      }}
                      onWaiting={() => {
                        if (isActive) {
                          setLoadingVideoId(video.id)
                        }
                      }}
                      onPlaying={() => {
                        if (loadingVideoId === video.id) {
                          setLoadingVideoId(null)
                        }
                      }}
                    />
                    
                    {/* Overlay с кнопкой - показывается когда видео не активно ИЛИ активно но не играет */}
                    {(!isActive || !isPlaying) && loadingVideoId !== video.id && (
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-150 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        onClick={() => handleVideoClick(video.id)}
                      >
                        <div className="w-16 h-16 mb-4 bg-gradient-to-br from-accent to-[#a0a028] rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-105">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Индикатор загрузки */}
                    {loadingVideoId === video.id && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <Loader2 className="w-10 h-10 text-accent animate-spin" />
                      </div>
                    )}
                    
                    {/* Контролы для активного видео */}
                    {isActive && !loadingVideoId && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleVideoClick(video.id)}
                              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                              {isPlaying ? (
                                <Pause className="w-5 h-5" />
                              ) : (
                                <Play className="w-5 h-5 ml-0.5" />
                              )}
                            </button>
                            <button
                              onClick={() => toggleMute(video.id)}
                              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                              {isMuted ? (
                                <VolumeX className="w-5 h-5" />
                              ) : (
                                <Volume2 className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                          <button
                            onClick={() => toggleFullscreen(video.id)}
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                          >
                            <Maximize2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">{video.title}</h3>
                    <p className="text-white/70 mb-4">{video.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Добавляем CSS анимации */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}