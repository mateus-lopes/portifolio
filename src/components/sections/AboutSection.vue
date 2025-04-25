<script setup lang="ts">
</script>

<template>
  <section class="about" id="about">
    <div class="about-content">
      <p>
        {{ $t('aboutMe1') }}
      </p>
      <p>
        {{ $t('aboutMe2') }}
      </p>
    </div>
    <img src="../../assets/images/teste.jpeg" class="img-about" />
  </section>
</template>

<style scoped>
.about {
  width: 75%;
  padding: 6em 0;
  margin: 10em auto 0;
  display: flex;
}

.about h2 {
  font-size: 2em;
}

.about p {
  max-width: 80%;
  color: #555;
}

.img-about {
  height: 350px;
}
</style>
