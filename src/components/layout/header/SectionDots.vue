<script lang="ts" setup>
import { useLayoutStore } from '../../../stores/layout';

const store = useLayoutStore();
</script>

<template>
    <a
        v-for="item in store.nav"
        :key="item.id"
          :href="'#' + item.id"
          class="dot"
          @click.prevent="item.btnAction ? item.btnAction() : store.scrollTo(item.id)"
          :class="{ currentDot: store.currentSection === item.id }"
          :data-tooltip="item.text"
    ></a>
</template>

<style scoped>
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
  color: #fff;
  font-size: 0.5em;
  padding: 0.3em 0.6em;
  border-radius: 5px;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dot:hover::before {
  opacity: 1;
  transform: translate(-50%, -200%);
}

.currentDot {
  background-color: cornflowerblue;
}
</style>
