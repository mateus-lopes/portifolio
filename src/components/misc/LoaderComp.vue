<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  loader: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div v-if="loader" class="loader-overlay">
    <div class="loader">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
    </div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.loader {
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 20px;
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #3498db;
  animation: bounce 0.6s infinite alternate;
}

.ball:nth-child(1) {
  animation-delay: 0s;
}

.ball:nth-child(2) {
  animation-delay: 0.2s;
}

.ball:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
</style>
