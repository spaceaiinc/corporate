import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    'en-US': {
      translation: require('@/locales/en-US/translation.json'),
    },
    'ja-JP': {
      translation: require('@/locales/ja-JP/translation.json'),
    },
    'zh-TW': {
      translation: require('@/locales/zh-TW/translation.json'),
    },
    'ko-KR': {
      translation: require('@/locales/ko-KR/translation.json'),
    },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
