<script setup lang="ts"></script>

<template>
  <section class="apps" id="projects">
    <div class="apps-content">
      <h2>
        {{ $t('projects') }}
      </h2>
      <p>
        {{ $t('projectsDescription') }}
      </p>
      <span class="comming-soon">
        {{ $t('comminSoon') }}
      </span>
      <!-- <div class="projects">
        <div class="project">
          <img src="../assets/images/Group 1.png" alt="" />
          <h3>Project 1</h3>
          <p>Project description goes here.</p>
        </div>
        <div class="project">
          <img src="../assets/images/Group 1.png" alt="" />
          <h3>Project 2</h3>
          <p>Project description goes here.</p>
        </div>
        <div class="project">
          <img src="../assets/images/Group 1.png" alt="" />
          <h3>Project 3</h3>
          <p>Project description goes here.</p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.apps {
  width: 75%;
  height: 100vh;
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
}
.projects {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
}
.project {
  width: 30%;
  text-align: center;
}
.project img {
  width: 100%;
  height: auto;
}
.project h3 {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.comming-soon {
  font-size: 2em;
  color: #000;
  font-weight: 700;
  margin-top: 2em;
  animation: text-shadow-swap 5s infinite ease-in-out;
}
</style>
