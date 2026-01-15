'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Youtube, ContactRound, Send, ExternalLink} from 'lucide-react';

export default function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const contacts = [
    // {
    //   icon: Phone,
    //   label: 'Телефон',
    //   value: '+7 (926) 591-05-73',
    //   href: 'tel:+79265910573'
    // },
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

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="section-padding relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface) 100%)'
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
                className="uppercase"
                style={{ color: 'var(--color-neutral-dark)' }}
              >Мои </span>
              <span 
                className="uppercase"
                style={{ color: 'var(--color-warm-accent)' }}
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
                className="flex-1 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-transparent"
                style={{
                  background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="space-y-3 sm:space-y-4 h-full">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.label !== 'Телефон' && contact.label !== 'Email' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: 'var(--color-accent)'
                        }}
                      >
                        <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p 
                          className="text-xs sm:text-sm mb-1 truncate"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {contact.label}
                        </p>
                        <p 
                          className="text-sm sm:text-base md:text-lg font-semibold hover:text-accent transition-colors truncate"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {contact.value}
                        </p>
                      </div>
                      {(contact.label === 'LinkedIn' || contact.label === 'YouTube' || contact.label === 'PCM Россия') && (
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-warm-accent transition-colors shrink-0" />
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
                className="flex-1 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, var(--color-var(--color-surface)) 0%, var(--color-surface-light) 100%)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="h-full flex flex-col">
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Запись на бесплатную консультацию
                  </h3>
                  
                  <form className="space-y-3 sm:space-y-4 md:space-y-5 flex-1 flex flex-col">
                    <div className="space-y-3 sm:space-y-4 md:space-y-5 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            Имя *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-surface rounded-lg placeholder-warm-accent outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                            style={{ 
                              color: 'var(--color-primary)',
                              border: '1px solid var(--color-border)'
                            }}
                            placeholder="Ваше имя"
                          />
                        </div>
                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-surface rounded-lg placeholder-warm-accent outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                            style={{ 
                              color: 'var(--color-primary)',
                              border: '1px solid var(--color-border)'
                            }}
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label 
                          htmlFor="phone" 
                          className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          Телефон
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          // required
                          className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-surface rounded-lg placeholder-warm-accent outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                          style={{ 
                            color: 'var(--color-primary)',
                            border: '1px solid var(--color-border)'
                          }}
                          placeholder="+7 (999) 999-99-99"
                        />
                      </div>

                      <div className="flex-1">
                        <label 
                          htmlFor="message" 
                          className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          Сообщение *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-surface rounded-lg placeholder-warm-accent outline-none transition-all duration-300 backdrop-blur-sm resize-vertical text-sm sm:text-base h-full min-h-[100px]"
                          style={{ 
                            color: 'var(--color-primary)',
                            border: '1px solid var(--color-border)'
                          }}
                          placeholder="Расскажите о ваших целях и задачах..."
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        className="group relative overflow-hidden w-full px-6 py-4 rounded-lg"
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-medium text-white">
                          Отправить заявку
                        </span>
                        <div 
                          className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                          style={{
                            background: 'linear-gradient(to right, var(--color-accent), var(--color-muted-teal))'
                          }}
                        ></div>
                      </motion.button>
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