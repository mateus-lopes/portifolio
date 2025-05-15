<script setup lang="ts"></script>

<template>
  <section id="home" class="highlight">
    <div class="highlight-content">
      <p>{{ $t('highlightSPAN') }}</p>
      <h1>
        {{ $t('highlight1a') }} <span class="underline">{{ $t('highlight1b') }}</span>
        {{ $t('highlight1c') }}
        <div class="decoration t1"><p>8</p></div>
      </h1>
      <h1>
        {{ $t('highlight2a') }} <span class="text-primary">{{ $t('highlight2b') }}</span>
        {{ $t('highlight2c') }}
        <div class="decoration t2"><p>🃏</p></div>
      </h1>
    </div>
    <div class="social-medias">
      <ul>
        <li>
          <a
            target="_blank"
            href="mailto:mateusalbano22@gmail.com?subject=Assunto%20do%20Email&body=Mensagem%20aqui%20no%20corpo%20do%20email"
            ><img class="icon" src="../../assets/images/icons/GMAIL.png" alt=""
          /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/mateus-lopes-albano-b35922237/"
            ><img class="icon" src="../../assets/images/icons/Group 4.png" alt=""
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/mateus-lopes?tab=overview&from=2024-12-01&to=2024-12-31"
            ><img class="icon" src="../../assets/images/icons/GITHUB.png" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.decoration {
  display: hidden !important;
  overflow: hidden;
  visibility: hidden;
}

ul {
  padding: 0;
  margin: 0;
}

.highlight {
  position: relative;
  width: 75%;
  margin: 5em auto 0;
  height: 70vh;
}

.highlight-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.highlight-content h1 {
  font-size: 3em;
  color: #000;
  font-weight: 700;
  margin: 0;
}

.highlight-content p {
  position: relative;
  font-size: 0.9em;
  color: #555;
  text-transform: uppercase;
  margin: 0;
}

.underline {
  font-weight: 100;
  text-decoration: line-through;
  text-decoration-color: #000;
  text-decoration-thickness: 1px;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(12px);
  }
  50% {
    transform: translateX(-12px);
  }
  75% {
    transform: translateX(12px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.t1 {
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 45px;
  color: #fafafa;
  overflow: hidden;
  top: 0em;
  right: -0.5em;
  animation: move 3s infinite;
}

.t2 {
  width: 60px;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  color: #fafafa;
  overflow: hidden;
  top: 2.5em;
  left: 5em;
}

.t1 p {
  font-size: small;
  color: #fafafa;
  animation: slide 4s infinite;
}

@keyframes flipCard {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.t2 p {
  font-size: 1.3em;
  animation: flipCard 5s infinite;
  transform-style: preserve-3d;
  color: #000;
}

.social-medias {
  width: 100%;
  display: flex;
  justify-content: start;
}

.social-medias ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-medias ul li {
  margin: 0 1em 0 0;
  border: 1px solid #0000002a;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
}

.social-medias ul li:hover {
  transform: translateY(-12px);
}

.social-medias ul li a {
  text-decoration: none;
}

.icon {
  display: flex;
  height: 24px;
  width: 24px;
}

@media screen and (min-width: 1000px) {
  .highlight-content h1 {
    font-size: 3.8em;
  }

  .decoration {
    display: flex;
    overflow: visible;
    visibility: visible;
  }

  .t2 {
    width: 60px;
    height: 80px;
    top: 0em;
    left: -1.2em;
  }

  .t2 p {
    font-size: 1em;
  }

  .social-medias ul li {
    margin: 0 1em;
  }

  .t1 {
    right: -1em;
  }
}

@media (max-height: 700px) {
  .highlight {
    margin-top: 10em;
    margin-bottom: 22em;
  }

  .social-medias {
    margin-top: 2em;
  }
}

@media screen and (max-width: 400px) {
  .social-medias {
    margin-top: 3.5em;
  }
}

@media screen and (min-width: 1440px) {
  .highlight {
    font-size: 1.2em;
  }
  .social-medias {
    margin-top: 2em;
    justify-content: center;
  }
  .social-medias ul li {
    margin: 0 0.5em;
  }
}
</style>
