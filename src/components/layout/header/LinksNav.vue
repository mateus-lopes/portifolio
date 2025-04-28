<script lang="ts" setup>
import { useLayoutStore } from '../../../stores/layout'

const store = useLayoutStore()

defineProps({
  icons: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <nav :class="{'navigation': !icons}">
    <ul>
      <li v-for="item in store.nav" :key="item.id">
        <a
          :href="'#' + item.id"
          class=""
          @click.prevent="item.btnAction ? item.btnAction() : store.scrollTo(item.id)"
          :class="[{ current: store.currentSection === item.id, 'link': !icons }]"
          :data-tooltip="$t(item.id)"
        >
          <i v-if="icons" class="icon" :class="[item.icon, {
            currentIcon: store.currentSection === item.id,
          }]"></i>
          {{ icons ? '' : $t(item.id) }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
}

.navigation {
  flex: 1;
}

.link {
  text-decoration: none;
  color: #000;
  position: relative;
  transition: color 0.2s ease-in-out;
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
  0%,
  100% {
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

.icon {
  font-size: 1.2em;
  margin: 0 1em;
  display: block;
  color: #333;
  text-decoration: none;
}

.currentIcon {
  color: cornflowerblue !important;
}
</style>
