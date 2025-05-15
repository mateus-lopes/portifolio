<template>
  <section class="contact-content">
    <h3>{{ $t('contact1') }}</h3>
    <h2>{{ $t('contact2') }}</h2>
    <a href="#" @click="openWhats" class="btn-stroke2 mt-2">{{ $t('contact3') }}</a>
  </section>
</template>

<script setup lang="ts">
const openWhats = () => {
  window.open('https://api.whatsapp.com/send?phone=5547999180331', '_blank')
}
</script>

<style scoped>
.contact-content {
  width: 75%;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em 0 0;
}

.contact-content h3 {
  font-size: 1em;
  color: gray;
  font-weight: 300;
}

.contact-content h2 {
  font-size: 3em;
  color: #000;
  font-weight: 700;
  animation: text-shadow-swap 5s infinite ease-in-out;
  margin: 0;
}

.contact-content h2:hover {
  animation-play-state: paused;
}

.mt-2 {
  margin-top: 5em;
}

@keyframes text-shadow-swap {
  0% {
    transform: translateX(-25px);
    text-shadow: 80px 50px 0 #0000005a;
  }
  50% {
    transform: translateX(50px);
    text-shadow: -80px 50px 0 #0000005a;
  }
  100% {
    transform: translateX(-25px);
    text-shadow: 80px 50px 0 #0000005a;
  }
}

@media screen and (min-width: 700px) {
  .contact-content h2 {
    font-size: 4em;
  }
}

@media screen and (min-width: 1440px) {
  .contact-content h2 {
    font-size: 5em;
  }

  .contact-content {
    margin: 0 auto 0;
    padding: 0;
  }
}
</style>
