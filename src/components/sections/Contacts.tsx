'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Youtube, ContactRound, Send, ExternalLink, Check } from 'lucide-react';

export default function Contacts() {
  const ref = useRef(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const contacts = [
    {
      icon: Send,
      label: 'Telegram',
      value: '@Suzanna_Kim',
      href: 'https://t.me/Suzanna_Kim'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Suzanna.info@gmail.com',
      href: 'mailto:Suzanna.info@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'suzanna-kim',
      href: 'https://www.linkedin.com/in/suzanna-kim-02060420a/'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: '@suzannachannel',
      href: 'https://youtube.com/@suzannachannel'
    },
    {
      icon: ContactRound,
      label: 'PCM Россия',
      value: 'Профиль тренера',
      href: 'https://pcmrussia.ru/pcm-certified-professionals/suzanna-kim'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToPrivacy) {
      alert('Пожалуйста, подтвердите согласие на обработку персональных данных');
      return;
    }
    
    // Здесь будет логика отправки формы
    console.log('Форма отправлена');
    setFormSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setFormSubmitted(false);
      setAgreedToPrivacy(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="section-padding relative overflow-x-hidden"
      style={{
        backgroundColor: 'var(--color-primary)'
      }}
    >

      <div className="container-custom px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span 
                className="uppercase inline-block"
                style={{ color: 'var(--color-accent)' }}
              >Мои </span>
              <span 
                className="uppercase inline-block ml-1 md:ml-2"
                style={{ color: 'var(--color-surface)' }}
              > контакты</span>
            </h2>
          </motion.div>

          {/* Две колонки */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12 lg:items-stretch">
            
            {/* Левая колонка - Контакты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 flex flex-col"
            >
              <div 
                className="flex-1 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="space-y-3 sm:space-y-4 h-full">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.label !== 'Email' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl transition-all duration-300 group"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: 'var(--color-accent)'
                        }}
                      >
                        <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: 'var(--color-surface)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p 
                          className="text-xs sm:text-sm mb-1 truncate"
                          style={{ color: 'var(--color-surface)', opacity: 0.8 }}
                        >
                          {contact.label}
                        </p>
                        <p 
                          className="text-sm sm:text-base md:text-lg font-semibold hover:text-accent transition-colors truncate"
                          style={{ color: 'var(--color-surface)' }}
                        >
                          {contact.value}
                        </p>
                      </div>
                      {(contact.label === 'LinkedIn' || contact.label === 'YouTube' || contact.label === 'PCM Россия') && (
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" 
                                     style={{ color: 'var(--color-accent)' }} />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Правая колонка - Форма */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 flex flex-col"
            >
              <div 
                className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="h-full flex flex-col">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                    style={{ color: 'var(--color-surface)' }}
                  >
                    Запись на бесплатную консультацию
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 flex-1 flex flex-col">
                    <div className="space-y-3 sm:space-y-4 md:space-y-5 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                            style={{ color: 'var(--color-surface)' }}
                          >
                            Имя *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg outline-none transition-all duration-300 text-sm sm:text-base placeholder-white/30"
                            style={{ 
                              color: 'var(--color-surface)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                            placeholder="Ваше имя"
                          />
                        </div>
                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                            style={{ color: 'var(--color-surface)' }}
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg outline-none transition-all duration-300 text-sm sm:text-base placeholder-white/30"
                            style={{ 
                              color: 'var(--color-surface)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label 
                          htmlFor="phone" 
                          className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                          style={{ color: 'var(--color-surface)' }}
                        >
                          Телефон
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg outline-none transition-all duration-300 text-sm sm:text-base placeholder-white/30"
                          style={{ 
                            color: 'var(--color-surface)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder="+7 (999) 999-99-99"
                        />
                      </div>

                      <div className="flex-1">
                        <label 
                          htmlFor="message" 
                          className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                          style={{ color: 'var(--color-surface)' }}
                        >
                          Сообщение *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg outline-none transition-all duration-300 resize-vertical text-sm sm:text-base h-full min-h-[100px] placeholder-white/30"
                          style={{ 
                            color: 'var(--color-surface)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder="Расскажите о ваших целях и задачах..."
                        />
                      </div>

                      {/* Чек-бокс согласия */}
                      <div className="mt-2">
                        <div className="flex items-start gap-3">
                          <div className="relative flex-shrink-0">
                            <input
                              type="checkbox"
                              id="privacy-agreement"
                              checked={agreedToPrivacy}
                              onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                              required
                              className="sr-only"
                            />
                            <label
                              htmlFor="privacy-agreement"
                              className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded cursor-pointer transition-all duration-200 ${agreedToPrivacy ? 'bg-accent' : 'bg-white/10'}`}
                              style={{
                                border: `1px solid ${agreedToPrivacy ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.3)'}`
                              }}
                            >
                              {agreedToPrivacy && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Check className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-surface)' }} />
                                </motion.div>
                              )}
                            </label>
                          </div>
                          <label 
                            htmlFor="privacy-agreement" 
                            className="text-xs sm:text-sm cursor-pointer"
                            style={{ color: 'var(--color-surface)' }}
                          >
                            Подтверждаю, что ознакомлен с{' '}
                            <a 
                              href="/privacy" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent hover:text-warm-accent transition-colors font-medium"
                            >
                              Политикой конфиденциальности
                            </a>
                            {' '}и даю согласие на обработку своих персональных данных для обработки запроса и получения консультации и услуг *
                          </label>
                        </div>
                        {!agreedToPrivacy && (
                          <p className="text-xs text-red-400 mt-1 ml-8">
                            Это поле обязательно для отправки формы
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={formSubmitted}
                        className={`group relative overflow-hidden w-full px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 ${formSubmitted ? 'cursor-not-allowed' : ''}`}
                        style={{
                          backgroundColor: formSubmitted ? 'var(--color-accent-dark)' : 'var(--color-accent)',
                          color: 'white',
                          opacity: formSubmitted ? 0.7 : 1
                        }}
                        whileHover={!formSubmitted ? { scale: 1.02 } : {}}
                        whileTap={!formSubmitted ? { scale: 0.98 } : {}}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                          {formSubmitted ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Check className="w-5 h-5" />
                              </motion.div>
                              Заявка отправлена!
                            </>
                          ) : (
                            'Отправить заявку'
                          )}
                        </span>
                        {!formSubmitted && (
                          <div 
                            className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                            style={{
                              background: 'linear-gradient(to right, var(--color-accent), var(--color-accent-dark))'
                            }}
                          ></div>
                        )}
                      </motion.button>

                      {formSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-3 rounded-lg text-center"
                          style={{
                            background: 'rgba(54, 106, 93, 0.2)',
                            border: '1px solid rgba(54, 106, 93, 0.3)'
                          }}
                        >
                          <p className="text-sm" style={{ color: 'var(--color-surface)' }}>
                            Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}