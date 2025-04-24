<script lang="ts" setup>
import HeaderComp from '../components/layout/HeaderComp.vue'
import FooterComp from '../components/layout/FooterComp.vue'
</script>

<template>
  <main>
    <header-comp />
    <section class="form-section">
      <div class="form-content">
        <h2>Formulário de Contato</h2>
        <form>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="8"></textarea>

          <button type="submit" class="btn-stroke">Enviar</button>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65050158.32351247!2d-120.48581504779662!3d5.662917943127588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd883cccfd8487%3A0xaf6e573aa1000094!2sAmazon%20Fulfillment%20Center%20MCO1!5e0!3m2!1spt-PT!2sbr!4v1712669173018!5m2!1spt-PT!2sbr"
        width="1200"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
    <footer-comp />
  </main>
</template>
