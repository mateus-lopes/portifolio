<script setup lang="ts">
import HeaderComp from '../components/layout/HeaderComp.vue'
import FooterComp from '../components/layout/FooterComp.vue'
</script>

<template>
  <main>
    <header-comp />

            <section class="highlight">
                <div class="highlight-content">
                    <p>------</p>
                    <h1>
                        --- <span class="underline">----</span> ----
                        <div class="decoration t1">
                            <p>+</p>
                        </div>
                    </h1>
                    <h1>
                        ----- <span class="bigbig">--</span> ----
                        <div class="decoration t2">
                            <p>+</p>
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
            <section class="apps">
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
