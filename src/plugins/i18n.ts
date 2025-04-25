// src/i18n.ts
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    about: "About Me",
    projects: "My Projects",
    contact: "Contact",
    aboutMe1: "Since I was young, I have always been passionate about technology. I began my studies early, at the age of 15, by enrolling in a high school program integrated with a Technical Course in Informatics at the Federal Institute of Santa Catarina (Instituto Federal Catarinense - IFC).",
    aboutMe2: "After completing high school, I continued my academic journey by pursuing a Bachelor's degree in Information Systems, also at IFC. During college, I joined the Software Factory as a volunteer (and later became a scholarship holder), where I simulated a professional work environment under the supervision of professors and participated in research, teaching, and extension projects.",
    highlightSPAN: "Welcome! I am a beginner developer seeking experience",
    highlight1a: "My",
    highlight1b: "biggest",
    highlight1c: "challenges",
    highlight2a: "that became",
    highlight2b: "small",
    highlight2c: "projects",
},
  pt: {
    home: "Início",
    about: "Sobre Mim",
    projects: "Meus Projetos",
    contact: "Contato",
    aboutMe1: "Desde jovem, sempre fui apaixonado por tecnologia e iniciei meus estudos bem cedo com 15 anos ao cursar  o ensino médio com Técnico em Informática integrado no Instituto Federal Catarinense.",
    aboutMe2: "Após a conclusão do Ensino Médio, dei continuidade à minha formação acadêmica no Bacharelado em Sistemas de Informação, também no IFC. Durante a faculdade, entrei para a Fábrica de Software como voluntário(futuramente me tornei bolsista), onde simulei um ambiente de trabalho sob supervisão de professores e participei de projetos de pesquisa, ensino e extensão.",
    highlightSPAN: "Bem-vindo! Sou um desenvolvedor buscando experiência",
    highlight1a: "Meus",
    highlight1b: "grandes",
    highlight1c: "desafios",
    highlight2a: "e",
    highlight2b: "pequenos",
    highlight2c: "projetos",
  },
};

const i18n = createI18n({
  locale: "pt", 
  fallbackLocale: "en",
  messages,
});

export default i18n;
