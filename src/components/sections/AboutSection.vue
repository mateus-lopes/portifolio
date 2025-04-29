<script setup lang="ts"></script>

<template>
  <section class="about" id="about">
    <div class="about-content">
      <div>
        <h2>
          {{ $t('about') }}
        </h2>
        <p>
          {{ $t('aboutMe1') }}
        </p>
        <p>
          {{ $t('aboutMe2') }}
        </p>
      </div>
      <img src="../../assets/images/teste.jpeg" class="img-about" />
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100vw;
  height: 100vh;
  margin: 15em 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about h2 {
  width: 100%;
  font-size: 1.3m;
  font-weight: 300;
  color: #0000004a;
}

.about p {
  max-width: 80%;
  color: #555;
}

.img-about {
  height: 300px;
  border: 1px solid #0000004a;
  padding: 1em;
  margin-top: 1.5em;
}

.about-content {
  display: block;
  justify-content: center;
  align-items: start;
  width: 75%;
}

@media screen and (max-width: 380px) {
  .img-about {
    height: 250px;
  }
}

@media screen and (min-width: 700px) {
  .about {
    margin: 0 !important;
  }
  
}

@media (min-width: 1000px) {
  .about-content {
    display: flex;
  }
}
</style>
