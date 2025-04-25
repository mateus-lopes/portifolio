<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSection = ref('');

onMounted(() => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => observer.observe(section));

  // cleanup
  onUnmounted(() => observer.disconnect());
});
</script>


<template>
    <header>
            <div class="div-logo">
                <h1>mateus-lopes</h1>
            </div>
            <div class="div-navegation">
                <nav>
                    <ul>
                        <li><a href="#home" class="link" :class="{ current: currentSection === 'home' }">Homepage</a></li>
                        <li><a href="#about" class="link" :class="{ current: currentSection === 'about' }">About me</a></li>
                        <li><a href="#projects" class="link" :class="{ current: currentSection === 'projects' }">My projects</a></li>
                    </ul>
                </nav>
            </div>
            <div class="div-dots">
                <a href="#home" class="dot" :class="{ currentDot: currentSection === 'home' }"></a>
                <a href="#about" class="dot" :class="{ currentDot: currentSection === 'about' }"></a>
                <a href="#projects" class="dot" :class="{ currentDot: currentSection === 'projects' }"></a>
            </div>
        </header>
</template>

<style scoped lang="css">

/* header */

header {
  width: 75%;
  height: 100px;
  display: flex;
  justify-content: between;
  align-items: center;
  margin: 0 auto;
}

.div-logo {
  min-width: 20%;
}

.div-logo h1 {
  font-size: 1.6em !important;
  font-weight: 200;
}

.div-navegation {
  width: 100%;
}

.div-navegation nav ul {
  list-style: none;
  margin: 1em;
  display: flex;
  justify-content: end;
  align-items: center;
}

.div-navegation nav ul a {
  margin: 0 0.8em;
}

.link {
  text-decoration: none;
  color: #000;
  position: relative;
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
  color: cornflowerblue !important;
}

@keyframes border {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

.current {
  color: cornflowerblue !important;
  font-weight: bold;
}

.div-dots {
    position: fixed;
    top: 50%;
    right: 2em;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.dot {
    display: block;
    width: 15px;
    margin: .5em 0;
    height: 15px;
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

</style>