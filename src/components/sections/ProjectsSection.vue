<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import { computed } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Importando o composable useScreen
import { useScreen } from '../../composables/useScreen'

const characterLimit = 200

const limitCharacters = (text: string, limit: number = characterLimit): string => {
  if (text.length <= limit) return text
  return text.substring(0, limit) + '...'
}

const modules = [Pagination, Navigation]

// Usando o composable para detectar o tamanho da tela
const { breakpoint } = useScreen()

// Computando se a navegação deve ser exibida com base no breakpoint
const showNavigation = computed(() => {
  return breakpoint.value === 'md' // Apenas mostrar navegação em desktop (md)
})
</script>

<template>
  <section class="apps" id="projects">
    <div class="apps-content">
      <Swiper
        :modules="modules"
        :navigation="showNavigation"
        :space-between="20"
        :slidesPerView="1"
        class="project-slider"
        :loop="true"
        :pagination="true"
      >
        <SwiperSlide>
          <div class="project">
            <img src="/projects/4.png" alt="" />
            <div>
              <h3>{{ $t('project1') }}</h3>
              <p>{{ limitCharacters($t('project1Description')) }}</p>
              <a
                href="https://github.com/mateus-lopes/projeto-markowitz"
                target="_blank"
                class="view-btn"
                >{{ $t('viewProject') }}</a
              >
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="/projects/3.png" alt="" />
            <div>
              <h3>{{ $t('project2') }}</h3>
              <p>{{ limitCharacters($t('project2Description')) }}</p>
              <a
                href="https://github.com/mateus-lopes/fabricaPI"
                target="_blank"
                class="view-btn"
                >{{ $t('viewProject') }}</a
              >
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="/projects/2.png" alt="" />
            <div>
              <h3>{{ $t('project3') }}</h3>
              <p>{{ limitCharacters($t('project3Description')) }}</p>
              <a
                href="https://github.com/mateus-lopes/empenhosIFC"
                target="_blank"
                class="view-btn"
                >{{ $t('viewProject') }}</a
              >
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="/projects/1.png" alt="" />
            <div>
              <h3>{{ $t('project4') }}</h3>
              <p>{{ limitCharacters($t('project4Description')) }}</p>
              <a
                href="https://github.com/mateus-lopes/fabricaHistologia_frontend"
                target="_blank"
                class="view-btn"
                >{{ $t('viewProject') }}</a
              >
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="/projects/5.png" alt="" />
            <div>
              <h3>{{ $t('project5') }}</h3>
              <p>{{ limitCharacters($t('project5Description')) }}</p>
              <a
                href="https://github.com/mateus-lopes/fabricaPainel_frontEnd"
                target="_blank"
                class="view-btn"
                >{{ $t('viewProject') }}</a
              >
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- <span class="comming-soon">{{ $t('comminSoon') }}</span> -->
      <!-- Dica de arrastar para dispositivos móveis (exibida apenas em mobile) -->
      <span class="hint" v-if="!showNavigation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#787878"
        >
          <path
            d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>
        {{ $t('dragHint') }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.apps {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.apps-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.apps-content h2 {
  font-size: 2em;
  margin-bottom: 1em;
}
.apps-content p {
  color: #555;
  text-align: left;
  margin-bottom: 2em;
}
.project-slider {
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.project img {
  width: 90%;
  height: auto;
  border-radius: 1em;
  border: 1px solid #0000004a;
  margin: 0 auto;
}
.project h3 {
  width: 90%;
  display: block;
  text-align: left;
  font-size: 1.5em;
  margin: 0.5em auto;
}
.project p {
  width: 90%;
  display: block;
  color: #555;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  margin: 0 auto;
}

.view-btn {
  display: block;
  padding: 0.5rem 1rem;
  width: 90%;
  margin: 1em auto;
  color: #000;
  text-decoration: underline;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-btn:hover {
  color: cornflowerblue;
  transform: translateY(-2px);
}
.comming-soon {
  font-size: 2em;
  color: #000;
  font-weight: 900;
  margin-top: 2em;
  animation: text-shadow-swap 5s infinite ease-in-out;
}
@media (max-height: 900px) {
  .apps {
    margin-top: 10em;
  }
}

.hint {
  display: flex;
  gap: 0.5em;
}

@media screen and (min-width: 1000px) {
  .project-slider {
    width: 70%;
  }

  .project {
    width: 70%;
    margin: 0 auto;
  }

  .project img {
    width: 100%;
  }

  .project h3 {
    width: 100%;
  }

  .project p {
    width: 100%;
  }

  .view-btn {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .project-slider {
    margin-top: 4em;
  }
}
</style>
