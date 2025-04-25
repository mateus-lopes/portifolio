<script setup lang="ts">
import HeaderComp from '@/components/layout/HeaderComp.vue'
import FooterComp from '@/components/layout/FooterComp.vue'
import HighlightSection from '@/components/sections/HighlightSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
</script>

<template>
  <main>
    <HeaderComp />
    <HighlightSection />
    <AboutSection />
    <ProjectsSection />
    <FooterComp />
  </main>
</template>


<style lang="css" scoped>
</style>