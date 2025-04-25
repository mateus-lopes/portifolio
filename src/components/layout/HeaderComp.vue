<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSection = ref('');
const isShrunk = ref(false);

const updateCurrentSection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentSection.value = entry.target.id;
    }
  });
};

const handleScroll = () => {
  isShrunk.value = window.scrollY > 50;
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

let observer: IntersectionObserver;

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
  <header :class="{ shrink: isShrunk }">
    <div class="logo">
      <h1>
        <a href="https://github.com/mateus-lopes" target="_blank" class="no-link">
          mateus-lopes
        </a>
      </h1>
    </div>

    <nav class="navigation">
      <ul>
        <li><a href="#home" @click.prevent="scrollTo('home')" class="link" :class="{ current: currentSection === 'home' }">Homepage</a></li>
        <li><a href="#about" @click.prevent="scrollTo('about')" class="link" :class="{ current: currentSection === 'about' }">About me</a></li>
        <li><a href="#projects" @click.prevent="scrollTo('projects')" class="link" :class="{ current: currentSection === 'projects' }">My projects</a></li>
      </ul>
    </nav>

    <div class="section-dots">
      <a href="#home" class="dot" @click.prevent="scrollTo('home')" :class="{ currentDot: currentSection === 'home' }"></a>
      <a href="#about" class="dot" @click.prevent="scrollTo('about')" :class="{ currentDot: currentSection === 'about' }"></a>
      <a href="#projects" class="dot" @click.prevent="scrollTo('projects')" :class="{ currentDot: currentSection === 'projects' }"></a>
      <a href="#contact" class="dot" @click.prevent="scrollTo('contact')" :class="{ currentDot: currentSection === 'contact' }"></a>
    </div>
  </header>
</template>

<style scoped>
body {
  padding-top: 200px;
}

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

.navigation {
  flex: 1;
}

.navigation ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 1.2em;
}

.link {
  text-decoration: none;
  color: #000;
  position: relative;
  transition: all .2s ease-in-out;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
}

.link:hover::after {
  background-color: pink;
  animation: border 2s infinite;
}

.current {
  color: cornflowerblue;
  border-bottom: 2px solid pink;
}

@keyframes border {
  0%, 100% {
    width: 0;
  }
  50% {
    width: 100%;
  }
}

.section-dots {
  position: fixed;
  top: 50%;
  right: 2em;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 15px;
  height: 15px;
  margin: 0.5em 0;
  background-color: #c3c3c3;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.dot:hover {
  background-color: #000;
}

.currentDot {
  background-color: cornflowerblue;
}

.no-link {
  text-decoration: none;
  color: #000;
}
</style>
