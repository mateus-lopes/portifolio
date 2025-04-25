<script setup lang="ts">
import HeaderComp from '../components/layout/HeaderComp.vue'
import FooterComp from '../components/layout/FooterComp.vue'
</script>

<template>
  <main>
    <header-comp />
            <section class="highlight" id="home">
                <div class="highlight-content">
                    <p>Welcome! I am a beginner developer</p>
                    <h1>
                        My <span class="underline">big</span> challenges
                        <div class="decoration t1">
                            <p>8</p>
                        </div>
                    </h1>
                    <h1>
                        and <span class="bigbig">tiny</span> projects
                        <div class="decoration t2">
                            <p>🃏</p>
                        </div>
                    </h1>
                </div>
                <div class="social-medias">
                    <ul>
                        <li>
                            <a href="#"><img class="icon" src="../assets/imagens/icons/Group 2.png" alt=""></a>
                        </li>
                        <li>
                            <a href="#"><img class="icon" src="../assets/imagens/icons/GMAIL.png" alt=""></a>
                        </li>
                        <li>
                            <a href="#"><img class="icon" src="../assets/imagens/icons/Group 4.png" alt=""></a>
                        </li>
                        <li>
                            <a href="#"><img class="icon" src="../assets/imagens/icons/GITHUB.png" alt=""></a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="about" id="about">
                <div class="about-content">
                    <p>Desde jovem, sempre fui apaixonado por tecnologia, computadores e consoles. Em 2019, iniciei meus estudos no curso Técnico em Informática no Instituto Federal Catarinense (IFC). Após concluir o Ensino Médio e o Curso Técnico em 2021, entrei para a Fábrica de Software como voluntário, onde simulei um ambiente de trabalho sob supervisão de professores e participei de projetos de pesquisa, ensino e extensão.
                    </p>
                    <p>Em 2022, comecei o Bacharelado em Sistemas de Informação no IFC e continuei minha participação na Fábrica de Software, agora também como bolsista. Durante 2023, servi em joinville no 62° BI e fui reconhecido como soldado de melhor desempenho no período básico. Retornei à faculdade no final do ano e decidi seguir carreira como profissional de SI.</p>
                    <!-- <a href="#" class="btn-stroke">Vamos Conversar...</a> -->
                </div>
                <img src="../assets/imagens/teste.jpeg" class="img-about">
            </section>
            <section class="apps" id="projects">
                <article class="app1">
                    <h2>
                        <a class="apps-title" href="../apps/pictures-app/index.html">Galeria de Imagens</a>
                    </h2>
                    <span class="paginator">1/4</span>
                </article>
                <article class="app2">
                    <h2>
                        <a class="apps-title" href="../apps/todo-list/index.html">Lista de Tarefas</a>
                    </h2>
                    <span class="paginator">2/4</span>
                </article>
                <article class="app3">
                    <h2>
                        <a class="apps-title" href="../apps/calc-app/index.html">Calculadora</a>
                    </h2>
                    <span class="paginator">3/4</span>
                </article>
                <article class="app4">
                    <h2>
                        <a class="apps-title" href="../apps/climate-app/index.html">Previsão do Tempo</a>
                    </h2>
                    <span class="paginator">4/4</span>
                </article>
            </section>
    <footer-comp />

        </main>
</template>


<style lang="css" scoped>
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

h1 {
  position: relative;
}

/* highlight 1 */

.highlight {
  position: relative;
  width: 75%;
  margin: 0 auto;
  height: 70vh;
}

.highlight-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.highlight-content h1 {
  font-size: 4em;
  color: #000;
  font-weight: 700;
  margin: 0;
}

.highlight-content p {
  position: relative;
  font-size: 0.9em;
  color: #555;
  text-transform: uppercase;
  margin: 0;
}

.underline {
  font-weight: 100;
  text-decoration: line-through;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(12px);
  }
  50% {
    transform: translateX(-12px);
  }
  75% {
    transform: translateX(12px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.t1 {
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 45px;
  color: #fff;
  overflow: hidden;
  top: 0em;
  right: -1em;
  animation: move 3s infinite;
}

.t2 {
  width: 40px;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  color: #fff;
  overflow: hidden;
  top: 0em;
  left: -1em;
  }

.t1 p {
  font-size: small;
  color: #fff;
  animation: slide 4s infinite;
}

@keyframes flipCard {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.t2 p {
  animation: flipCard 5s infinite;
  transform-style: preserve-3d;
  color: #000;
}

.social-medias {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-medias ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-medias ul li {
  margin: 0 0.5em;
  border: 1px solid #0000002a;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
}

.social-medias ul li:hover {
  transform: translateY(-12px);
}

.social-medias ul li a {
  text-decoration: none;
}

.icon {
  display: flex;
  height: 24px;
  width: 24px;
}

/* about */

.about {
  width: 75%;
  padding: 6em 0;
  margin: 10em auto;
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
}

.apps {
    margin: 5em 0;
}
</style>