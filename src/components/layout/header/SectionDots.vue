<script lang="ts" setup>
import { useLayoutStore } from '../../../stores/layout'

const store = useLayoutStore()
</script>

<template>
  <div class="section-dots">
    <a
      v-for="item in store.nav"
      :key="item.id"
      :href="'#' + item.id"
      class="dot"
      @click.prevent="item.btnAction ? item.btnAction() : store.scrollTo(item.id)"
      :class="{ currentDot: store.currentSection === item.id }"
      :data-tooltip="$t(item.id)"
    ></a>
  </div>
</template>

<style scoped>
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
  color: #fafafa;
  font-size: 0.5em;
  padding: 0.3em 0.6em;
  border-radius: 5px;
  opacity: 0;
  #fafafa-space: nowrap;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.dot:hover::before {
  opacity: 1;
  transform: translate(-50%, -200%);
}

.currentDot {
  background-color: cornflowerblue;
}
</style>
