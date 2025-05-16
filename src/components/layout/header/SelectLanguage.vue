<script lang="ts" setup>
import { onMounted } from 'vue'
import { useLanguageStore } from '../../../stores/language'
import LoaderComp from '../../misc/LoaderComp.vue'

const storeLanguage = useLanguageStore()

onMounted(() => {
  storeLanguage.setLanguage(storeLanguage.getLanguage())
})
</script>

<template>
  <LoaderComp :loader="storeLanguage.loading" />
  <div class="div-language">
    <button class="language-icon" @click="storeLanguage.setLanguage('pt')">
      <img
        src="/countries/brazil.png"
        alt="Portuguese"
        :class="{
          active: storeLanguage.getLanguage() === 'pt',
        }"
      />
    </button>
    <button class="language-icon" @click="storeLanguage.setLanguage('en')">
      <img
        src="/countries/eua.png"
        alt="English"
        :class="{
          active: storeLanguage.getLanguage() === 'en',
        }"
      />
    </button>
  </div>
</template>

<style scoped>
.div-language {
  display: flex;
  gap: 5px;
  margin-left: 1em;
}

.language-icon {
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
}

.language-icon img {
  width: 100%;
  border-radius: 100%;
}

img.active {
  border: 2px solid #000;
}
</style>
