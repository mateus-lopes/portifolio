<script setup lang="ts"></script>

<template>
  <section class="about" id="about">
    <h2>
      {{ $t('about') }}
    </h2>
    <div class="about-content">
      <div>
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
  width: 75%;
  height: 100vh;
  margin: 10em auto 0;
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
  height: 350px;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: start;
}
</style>
