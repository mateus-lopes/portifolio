<script lang="ts" setup>
</script>

<template>
    <footer>
            <section class="contact-content">
                <h3>Quer começar um projeto?</h3>
                <h2>Vamos Conversar...</h2>
                <a href="#" class="btn-stroke2">Entre em contato</a>
            </section>
            <section class="main-footer">
                <div class="logo-footer">
                    <img src="./src/assets/imagens/Group 21.png" height="40px" alt="">
                </div>
                <div class="container">
                    <div class="footer-navegation">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perspiciatis voluptatum laudantium ipsum officia qui enim. Quisquam, quos. Quisquam, quos.
                        </p>
                        <nav>
                            <ul>
                                <li><a href="index.html" class="link current"> Página Inicial </a></li>
                                <li><a href="#about" class="link"> Sobre </a></li>
                                <li><a href="contact.html" class="link"> Entre em Contato </a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="fast-contact">
                        <p>telefone: (11) 9999-9999</p>
                        <p>email: teste@email.com</p>
                    </div>
                </div>
            </section>
        </footer>
</template>

<style scoped lang="css">

/* contact */

.contact-content {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
}

.contact-content h3 {
  font-size: 1em;
  color: gray;
  font-weight: 300;
}

.contact-content h2{
  display: block;
  font-size: 4em;
  color: #000;
  font-weight: 700;
  animation: text-shadow-swap 5s infinite ease-in-out;
  padding-bottom: 1em;
  margin: 0;
}

.contact-content h2:hover {
  animation-play-state: paused;
}

@keyframes text-shadow-swap {
  0% {
      transform: translateX(-25px);
      text-shadow: 80px 50px 0 #0000005a;
  }
  50% {
      transform: translateX(50px);
      text-shadow: -80px 50px 0 #0000005a;
  }
  100% {
      transform: translateX(-25px);
      text-shadow: 80px 50px 0 #0000005a;
  }
}

/* footer */

footer {
  margin-bottom: 2em;
}

.main-footer {
  width: 100%;
  margin: 0 auto;
}

.container {
  border-top: 1px solid #0000001a;
}

.footer-navegation {
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: between;
  padding-top: 2em;
}

.footer-navegation p {
  max-width: 40%;
  margin: 0 auto 0 0;
}

.logo-footer {
  width: 75%;
  padding-bottom: 2em;
  margin: 0 auto;
}

.fast-contact {
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: start;
  gap: 1em;
}

footer nav li {
  list-style: none;
  margin: 1em 0;
}


.contact-content {
  margin-top: calc(3*70vh);
}
</style>