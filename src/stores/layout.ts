import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const currentSection = ref('')
  const isShrunk = ref(false)

  const nav = [
    { 
      id: 'home', 
      text: 'Homepage', 
      icon: 'fa-solid fa-house',
      btnAction: () => scrollToTop()
    },
    { 
      id: 'about', 
      text: 'About me',
      icon: 'fas fa-user',
    },
    { 
      id: 'projects', 
      text: 'My projects',
      icon: 'fa-solid fa-code',
    },
    { 
      id: 'contact', 
      text: 'Contact',
      icon: 'fa-solid fa-envelope',
     },
  ]

  const setCurrentSection = (section: string) => {
    currentSection.value = section
  }

  const setIsShrunk = (shrunk: boolean) => {
    isShrunk.value = shrunk
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return { currentSection, isShrunk, nav, setCurrentSection, setIsShrunk, scrollToTop, scrollTo }
})
