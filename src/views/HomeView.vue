<script setup lang="ts">
import { useScreen } from '../composables/useScreen'
import HighlightSection from '../components/sections/HighlightSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'

const { nav, footer } = useScreen()
</script>

<template>
  <main>
    <component :is="nav" />
    <HighlightSection />
    <AboutSection />
    <ProjectsSection />
    <component :is="footer" />
  </main>
</template>

<style lang="css" scoped></style>
