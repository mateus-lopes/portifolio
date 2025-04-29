<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const cursor = document.getElementById('custom-cursor')

  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    })
  }
})
</script>

<template>
  <div id="custom-cursor"></div>
</template>

<style>
#custom-cursor {
  width: 16px;
  height: 16px;
  border: 1.8px solid black;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  z-index: 10000;
}

/* body,
a,
button,
[data-cursor-pointer] {
  cursor: none !important;
} */
</style>
