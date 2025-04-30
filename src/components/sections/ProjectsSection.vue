<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
  <section class="apps" id="projects">
    <div class="apps-content">
      <h2>{{ $t('projects') }}</h2>
      <p>{{ $t('projectsDescription') }}</p>

      <Swiper
        :spaceBetween="20"
        :slidesPerView="1"
        class="project-slider"
        :loop="true"
      >
        <SwiperSlide>
          <div class="project">
            <img src="../../assets/images/projects/markowitz.png" alt="" />
            <div>
              <h3>{{ $t('project1') }}</h3>
              <p>{{ $t('project1Description') }}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="../../assets/images/projects/pi.png" alt="" />
            <div>
              <h3>{{ $t('project1') }}</h3>
              <p>{{ $t('project1Description') }}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="../../assets/images/projects/task.png" alt="" />
            <div>
              <h3>{{ $t('project1') }}</h3>
              <p>{{ $t('project1Description') }}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="../../assets/images/projects/transp.png" alt="" />
            <div>
              <h3>{{ $t('project1') }}</h3>
              <p>{{ $t('project1Description') }}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="project">
            <img src="../../assets/images/projects/ts.png" alt="" />
            <div>
              <h3>{{ $t('project1') }}</h3>
              <p>{{ $t('project1Description') }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- <span class="comming-soon">{{ $t('comminSoon') }}</span> -->
      <span class="hint">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#787878"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        arraste para o lado
      </span>
    </div>
  </section>
</template>

<style scoped>
.apps {
  width: 75%;
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
  max-width: 80%;
  color: #555;
  text-align: center;
  margin-bottom: 2em;
}
.project-slider {
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  max-width: 70%;
}
.project img {
  width: 100%;
  height: auto;
  border-radius: 1em;
}
.project h3 {
  text-align: center;
  font-size: 1.5em;
  margin: 0.5em 0;
}
.project p {
  color: #555;
  text-align: center;
}
.comming-soon {
  font-size: 2em;
  color: #000;
  font-weight: 700;
  margin-top: 2em;
  animation: text-shadow-swap 5s infinite ease-in-out;
}
@media (max-height: 700px) {
  .apps {
    margin-top: 10em;
  }
}

.hint {
  display: flex;
  gap: 0.5em;
}
</style>
