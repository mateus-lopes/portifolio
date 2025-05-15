<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '../../stores/layout'
import SelectLanguage from './header/SelectLanguage.vue'

const storeLayout = useLayoutStore()

let observer: IntersectionObserver

const updateCurrentSection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      storeLayout.setCurrentSection(entry.target.id)
    }
  })
}
const handleScroll = () => {
  storeLayout.setIsShrunk(window.scrollY > 50)
}

onMounted(() => {
  const sections = document.querySelectorAll('section')
  // Add rootMargin and reduce threshold for better mobile performance
  observer = new IntersectionObserver(updateCurrentSection, {
    threshold: 0.3,
    rootMargin: '0px',
  })
  sections.forEach((section) => observer.observe(section))

  // Use passive event listener for better scroll performance
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header>
    <SelectLanguage />
    <!-- <LinkNav icons /> -->
  </header>
</template>

<style scoped>
/* header {
  background-color: #fff;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #0000005a;
} */

header {
  width: 100%;
  height: 100px;
  padding: 0 2em;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
