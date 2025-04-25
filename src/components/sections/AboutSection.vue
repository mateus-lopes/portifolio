<script setup lang="ts">

const content = {
  english: {
    title: "About",
    description: [
      "Since I was young, I have always been passionate about technology. I began my studies early, at the age of 15, by enrolling in a high school program integrated with a Technical Course in Informatics at the Federal Institute of Santa Catarina (Instituto Federal Catarinense - IFC).",
      "After completing high school, I continued my academic journey by pursuing a Bachelor's degree in Information Systems, also at IFC. During college, I joined the Software Factory as a volunteer (and later became a scholarship holder), where I simulated a professional work environment under the supervision of professors and participated in research, teaching, and extension projects. (GitHub - Software Factory)",
      // "In 2023, I served in the 62nd Infantry Battalion in Joinville, where I was honored as the top-performing soldier during the basic training period. I returned to college at the end of the year and decided to pursue a career as an Information Systems professional after securing a summer internship at the company SoftExpert."
    ],
  },
}
</script>

<template>
  <section class="about" id="about">
    <div class="about-content">
      <p v-for="(text, index) in content.english.description" :key="index">
        {{ text }}
      </p>
    </div>
    <img src="../../assets/imagens/teste.jpeg" class="img-about">
  </section>
</template>

<style scoped>
.about {
  width: 75%;
  padding: 6em 0;
  margin: 10em auto 0;
  display: flex;
}

.about h2 {
  font-size: 2em;
}

.about p {
  max-width: 80%;
  color: #555;
}

.img-about {
    height: 350px;
}</style>
