<script lang="ts" setup>
import { useLayoutStore } from '../../../stores/layout';

const store = useLayoutStore();
</script>

<template>
    <ul>
        <li
          v-for="item in store.nav"
            :key="item.id"
        >
          <a
            :href="'#' + item.id"
            class="link"
            @click.prevent="item.btnAction ? item.btnAction() : store.scrollTo(item.id)"
            :class="{ current: store.currentSection === item.id }"
            :data-tooltip="item.text"
        >
          {{ item.text }}
        </a>
    </li>
      </ul>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: #000;
  position: relative;
  transition: color .2s ease-in-out;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
}

.link:hover::after {
  background-color: pink;
  animation: border 2s infinite;
}

.current {
  color: cornflowerblue;
  border-bottom: 2px solid pink;
}

@keyframes border {
  0%, 100% {
    width: 0;
  }
  50% {
    width: 100%;
  }
}

 ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 1.2em;
}
</style>