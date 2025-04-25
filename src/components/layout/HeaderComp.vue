<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSection = ref('');
const isShrunk = ref(false);

const nav = [
  { id: 'home', text: 'Homepage', action: () => scrollToTop() },
  { id: 'about', text: 'About me' },
  { id: 'projects', text: 'My projects' },
  { id: 'contact', text: 'Contact' },
];

let observer: IntersectionObserver;


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

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <li v-for="item in nav" :key="item.id">
          <a
            :href="'#' + item.id"
            @click.prevent="item.action ? item.action() : scrollTo(item.id)"
            class="link"
            :class="{ current: currentSection === item.id }"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="section-dots">
      <a
        v-for="item in nav"
        :key="item.id"
        :href="'#' + item.id"
        class="dot"
        @click.prevent="item.action ? item.action() : scrollTo(item.id)"
        :class="{ currentDot: currentSection === item.id }"
        :data-tooltip="item.text"
      ></a>
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
  transition: color .2s ease-in-out;
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
}

.dot {
  width: 15px;
  height: 15px;
  margin: 0.5em 0;
  background-color: #c3c3c3;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
}

.dot:hover {
  background-color: #000;
  transform: scale(1.5);
}

.dot::before {
  content: attr(data-tooltip);
  position: absolute;
  top: 200%;
  left: -200%;
  background-color: #000;
  color: #fff;
  font-size: 0.5em;
  padding: 0.3em 0.6em;
  border-radius: 5px;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dot:hover::before {
  opacity: 1;
  transform: translate(-50%, -200%);
}

.no-link {
  text-decoration: none;
  color: #000;
}
</style>
