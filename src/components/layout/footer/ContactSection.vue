<template>
    <section class="contact-content">
      <h3>Can you start a project?</h3>
      <h2>Let's Talk...</h2>
      <a href="#" class="btn-stroke2 mt-2">Get in touch</a>
    </section>
  </template>
  
  <style scoped>
  .contact-content {
    width: 75%;
    margin: 8em auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em 0 0;
  }
  
  .contact-content h3 {
    font-size: 1em;
    color: gray;
    font-weight: 300;
  }
  
  .contact-content h2 {
    font-size: 4em;
    color: #000;
    font-weight: 700;
    animation: text-shadow-swap 5s infinite ease-in-out;
    margin: 0;
  }
  
  .contact-content h2:hover {
    animation-play-state: paused;
  }

  .mt-2 {
    margin-top: 5em;
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
  </style>
  