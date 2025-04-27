import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export const useLanguageStore = defineStore('language', () => {
  const { locale } = useI18n();
  const loading = ref(false);

  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    locale.value = savedLanguage;
  } else {
    locale.value = 'en'; 
  }

  const setLanguage = (lang: string) => {
    loading.value = true;
    locale.value = lang;
    localStorage.setItem('language', lang);
    setTimeout(() => {
      loading.value = false;
    }, 700);
  };

  const getLanguage = () => locale.value;

  return { setLanguage, getLanguage, loading };
});