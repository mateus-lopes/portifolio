import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

export const useLanguageStore = defineStore('language', () => {
  const { locale } = useI18n();

  const setLanguage = (lang: string) => {
    locale.value = lang;
    localStorage.setItem('language', lang);
  };

  return { setLanguage };
});
