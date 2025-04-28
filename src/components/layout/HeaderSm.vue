<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '../../stores/layout'
import LinkNav from './header/LinksNav.vue'

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
  observer = new IntersectionObserver(updateCurrentSection, {
    threshold: 0.6,
  })
  sections.forEach((section) => observer.observe(section))
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header>
    <LinkNav icons />
  </header>
</template>

<style scoped>
header {
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
}
</style>


