<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '../../stores/layout'
import LinkNav from './header/LinksNav.vue'
import SectionDot from './header/SectionDots.vue'
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
  <header :class="{ shrink: storeLayout.isShrunk }">
    <div class="logo">
      <h1>
        <a href="https://github.com/mateus-lopes" target="_blank" class="no-link"> mateus-lopes </a>
      </h1>
    </div>
    <LinkNav />
    <SelectLanguage />
    <SectionDot />
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 100px;
  padding: 0 6em;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;
}

header.shrink {
  height: 70px;
  border-bottom: 1px solid #0000005a;
}

.logo h1 {
  font-size: 1.6em;
  font-weight: 200;
  transition: font-size 0.3s ease;
}

header.shrink .logo h1 {
  font-size: 1.3em;
}

.no-link {
  text-decoration: none;
  color: #000;
}
</style>
