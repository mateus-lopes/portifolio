<template>
  <div class="container">
    <p>
      {{ $t('footer1') }}
      <a href="https://github.com/mateus-lopes" target="_blank" class="link">Mateus Lopes</a>
    </p>
  </div>
</template>

<style scoped>
.container {
  border-top: 1px solid #0000001a;
  text-align: center;
  padding-top: 1em;
  margin-bottom: 10em;
}

.link {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.link:hover {
  color: cornflowerblue;
}
</style>
