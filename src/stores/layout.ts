import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const currentSection = ref('')
  const isShrunk = ref(false)

  const nav = [
    { id: 'home', text: 'Homepage', btnAction: () => scrollToTop() },
    { id: 'about', text: 'About me' },
    { id: 'projects', text: 'My projects' },
    { id: 'contact', text: 'Contact' },
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
