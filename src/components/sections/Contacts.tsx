'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Linkedin, Youtube, ContactRound, Send, ExternalLink} from 'lucide-react';

export default function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const contacts = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 (926) 591-05-73',
      href: 'tel:+79265910573'
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
      value: 'Профиль специалиста',
      href: 'https://pcmrussia.ru/pcm-certified-professionals/suzanna-kim'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="section-padding relative overflow-x-hidden bg-primary"
      // style={{
      //   background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-earth-brown) 100%)'
      // }}
    >
      {/* Глобальные стили для input фокуса и автозаполнения */}
      <style jsx global>{`
        /* Убираем стандартную синюю рамку фокуса */
        input:focus,
        textarea:focus {
          outline: none !important;
          box-shadow: none !important;
          border-color: var(--color-accent) !important;
        }
        
        /* Кастомные стили для фокуса */
        .custom-input:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 2px rgba(var(--color-accent-rgb), 0.2) !important;
        }
        
        /* Стили для автозаполнения */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px var(--color-primary) inset !important;
          -webkit-text-fill-color: var(--color-surface) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          transition: background-color 5000s ease-in-out 0s, border-color 0.3s ease !important;
        }
        
        /* Фокус на автозаполненном поле */
        input:-webkit-autofill:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 
            0 0 0px 1000px var(--color-primary) inset,
            0 0 0 2px rgba(var(--color-accent-rgb), 0.2) !important;
        }
        
        /* Для Firefox */
        input:-moz-autofill {
          background-color: var(--color-primary) !important;
          color: var(--color-surface) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
        
        input:-moz-autofill:focus {
          background-color: var(--color-primary) !important;
          border-color: var(--color-accent) !important;
        }
        
        /* Для Edge */
        input:autofill {
          background-color: var(--color-primary) !important;
          color: var(--color-surface) !important;
        }
      `}</style>

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
                style={{ color: 'var(--color-accent)' }}
              >Мои</span>
              <span 
                className="uppercase ml-2"
                style={{ color: 'var(--color-surface)' }}
              > контакты</span>
            </h2>
            <p 
              className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto px-2"
              style={{ color: 'var(--color-surface)' }}
            >
              Свяжитесь со мной для консультации и записи на встречу
            </p>
          </motion.div>

          {/* Две колонки */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Левая колонка - Контакты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3 sm:space-y-4 lg:col-span-2"
            >
              <div className="space-y-3 sm:space-y-4">
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
                      boxShadow: '0 4px 15px rgba(55, 73, 64, 0.1)'
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
                        style={{ color: 'var(--color-white-80)' }}
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
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-accent transition-colors shrink-0" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Правая колонка - Форма */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div 
                className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-white/10"
                style={{
                  boxShadow: '0 4px 15px rgba(55, 73, 64, 0.2)'
                }}
              >
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ color: 'var(--color-surface)' }}
                >
                  Запись на консультацию
                </h3>
                <p 
                  className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--color-white-80)' }}
                >
                  Оставьте ваши контакты, и я свяжусь с вами в ближайшее время для уточнения деталей и назначения времени встречи.
                </p>
                
                <form className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                        style={{ color: 'var(--color-white-80)' }}
                      >
                        Имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                        style={{ 
                          color: 'var(--color-surface)',
                          borderColor: 'rgba(217, 219, 210, 0.2)'
                        }}
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                        style={{ color: 'var(--color-white-80)' }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                        style={{ 
                          color: 'var(--color-surface)',
                          borderColor: 'rgba(217, 219, 210, 0.2)'
                        }}
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                      style={{ color: 'var(--color-white-80)' }}
                    >
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      className="custom-input w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 outline-none transition-all duration-300 backdrop-blur-sm resize-vertical text-sm sm:text-base"
                      style={{ 
                        color: 'var(--color-surface)',
                        borderColor: 'rgba(217, 219, 210, 0.2)'
                      }}
                      placeholder="Расскажите о ваших целях и задачах..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 sm:py-4 px-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 group"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-green-fern) 100%)',
                      color: '#ffffff',
                      boxShadow: '0 4px 15px rgba(54, 106, 93, 0.3)'
                    }}
                  >
                    <span>Отправить заявку</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}