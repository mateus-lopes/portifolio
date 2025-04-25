<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useLayoutStore } from '../../stores/layout';
import LinkNav from './header/LinksNav.vue';
import SectionDot from './header/SectionDots.vue';

const store = useLayoutStore();

let observer: IntersectionObserver;

const updateCurrentSection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      store.setCurrentSection(entry.target.id);
    }
  });
};

const handleScroll = () => {
  store.setIsShrunk(window.scrollY > 50);
};

onMounted(() => {
  const sections = document.querySelectorAll('section');

  observer = new IntersectionObserver(updateCurrentSection, {
    threshold: 0.6,
  });

  sections.forEach(section => observer.observe(section));
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  observer?.disconnect();
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="{ shrink: store.isShrunk }">
    <div class="logo">
      <h1>
        <a href="https://github.com/mateus-lopes" target="_blank" class="no-link">
          mateus-lopes
        </a>
      </h1>
    </div>

    <nav class="navigation">
      <LinkNav />
    </nav>

    <div class="section-dots">
      <SectionDot />
    </div>
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
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;
}

header.shrink {
  height: 70px;
    box-shadow: 0 3px 10px rgba(59, 59, 59, 0.1);
}

.logo h1 {
  font-size: 1.6em;
  font-weight: 200;
  transition: font-size 0.3s ease;
}

header.shrink .logo h1 {
  font-size: 1.3em;
}

.section-dots {
  position: fixed;
  top: 50%;
  right: 2em;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.navigation {
  flex: 1;
}

.no-link {
  text-decoration: none;
  color: #000;
}
</style>
