import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  // Habilita o backend do i18next
  .use(Backend)
  // Habilita a detecção automática de linguagem
  .use(LanguageDetector)
  // Habilita o módulo de inicialização do hook
  .use(initReactI18next)
  .init({
    // Linguagem padrão utilizada
    fallbackLng: 'en',
    debug: false,
    // Detecta e guarda um cookie em cache da linguagem fornecida
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    // saveMissing: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
