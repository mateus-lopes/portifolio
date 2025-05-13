// src/i18n.ts
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    projects: 'My Projects',
    contact: 'Contact',

    // About Section
    aboutMe1:
      'Since I was young, I have always been passionate about technology. I began my studies early, at the age of 15, by enrolling in a high school program integrated with a Technical Course in Informatics at the Federal Institute of Santa Catarina (Instituto Federal Catarinense - IFC).',
    aboutMe2:
      "After completing high school, I continued my academic journey by pursuing a Bachelor's degree in Information Systems, also at IFC. During college, I joined the Software Factory as a volunteer (and later became a scholarship holder), where I simulated a professional work environment under the supervision of professors and participated in research, teaching, and extension projects.",

    // Highlight Section
    highlightSPAN: 'Commit to the Lord whatever you do, and he will establish your plans',
    highlight1a: '',
    highlight1b: 'great',
    highlight1c: 'projects I participated',
    highlight2a: 'in during my',
    highlight2b: 'academic',
    highlight2c: 'journey',

    // Projects Section
    projectsDescription: 'Here are some of my projects that I have developed during my studies.',
    comminSoon: 'Coming Soon',
    dragHint: 'drag to the side',
    viewProject: 'View Project',

    // Project 1
    project1: 'Markowitz Project (IFC)',
    project1Description:
      "Web application for investment portfolio management. Based on the user's selected asset classes, it calculates the optimal portfolio allocation, aiming for the best balance between risk and return using Markowitz's Modern Portfolio Theory.",

    // Project 2
    project2: 'Campus PI - (IFC Network)',
    project2Description:
      'This research project focuses on analyzing performance indicators of Federal Institutes. Through data collection and analysis, it provides insights for institutional improvement.',

    // Project 3
    project3: 'IFC Commitments - Araquari',
    project3Description:
      'This project aims to enable the community to monitor the campus budget execution. The information is presented considering, over time, the values of Committed Expenses and Settled Expenses.',

    // Project 4
    project4: 'Factory Panel - (IFC Araquari)',
    project4Description:
      'The Teaching, Research and Extension Week (SEPE) is an institutional event that promotes scientific dissemination and knowledge integration through lectures, courses, congresses, and panels, involving areas such as Veterinary Medicine, Informatics, and Teaching Degrees. With a focus on excellence and impartiality, the SEPE system conducts diverse evaluations through random selection of advisors and evaluators. The portal developed by the Software Factory of the Federal Institute of Santa Catarina - Araquari Campus facilitates the submission and monitoring of works, encouraging collaboration between students, teachers, and the community. Created by a team of computer science students with faculty guidance, the project offers practical experience and brings students closer to the job market.',

    // Project 5
    project5: 'Digital Histology Atlas of IFC Araquari',
    project5Description:
      'A digital platform that provides access to histology images and educational content for veterinary medicine students. The project aims to enhance learning through interactive visualization of tissue samples.',

    // Contact Section
    contact1: 'Do you want to start a project?',
    contact2: "Let's Talk...",
    contact3: 'Get in touch',

    // Footer
    footer1: 'Developed by',
    backTop: 'Back to Top',
  },
  pt: {
    // Navegação
    home: 'Início',
    about: 'Sobre Mim',
    projects: 'Meus Projetos',
    contact: 'Contato',

    // Seção Sobre
    aboutMe1:
      'Desde jovem, sempre fui apaixonado por tecnologia e iniciei meus estudos bem cedo com 15 anos ao cursar o ensino médio com Técnico em Informática integrado no Instituto Federal Catarinense.',
    aboutMe2:
      'Após a conclusão do Ensino Médio, dei continuidade à minha formação acadêmica no Bacharelado em Sistemas de Informação, também no IFC. Durante a faculdade, entrei para a Fábrica de Software como voluntário (futuramente me tornei bolsista), onde simulei um ambiente de trabalho sob supervisão de professores e participei de projetos de pesquisa, ensino e extensão.',

    // Seção Destaque
    highlightSPAN: 'Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos',
    highlight1a: '',
    highlight1b: 'grandes',
    highlight1c: 'projetos que',
    highlight2a: 'participei durante minha jornada',
    highlight2b: 'acadêmica',
    highlight2c: '',

    // Seção Projetos
    projectsDescription: 'Aqui estão alguns dos projetos que desenvolvi durante meus estudos.',
    comminSoon: 'Em Breve',
    dragHint: 'arraste para o lado',
    viewProject: 'Ver Projeto',

    // Projeto 1
    project1: 'Projeto Markowitz (Bolsa IFC)',
    project1Description:
      'Aplicação web para gerenciamento de carteiras de investimentos. Com base nas classes de ativos informadas pelo usuário, calcula a composição ideal da carteira, buscando o melhor equilíbrio entre risco e retorno segundo a Teoria Moderna do Portfólio de Markowitz.',

    // Projeto 2
    project2: 'Campus PI - (Rede IFC)',
    project2Description:
      'Este projeto de pesquisa tem como foco principal a análise dos indicadores de desempenho dos Institutos Federais. Através da coleta e análise de dados, fornece insights para a melhoria institucional.',

    // Projeto 3
    project3: 'Empenhos IFC - Araquari',
    project3Description:
      'Este projeto tem por objetivo possibilitar à comunidade o acompanhamento da execução do orçamento do campus. As informações são apresentadas considerando, ao longo do tempo, os valores de Despesas Empenhadas e Despesas Liquidadas.',

    // Projeto 4
    project4: 'Fábrica Painel - (IFC Araquari)',
    project4Description:
      'Este site foi criado para facilitar a submissão de trabalhos acadêmicos que integram ensino, pesquisa e extensão, promovendo a troca de conhecimentos entre estudantes, professores e a comunidade. Aqui, você poderá enviar seus projetos, colaborar com outras áreas e contribuir para o desenvolvimento científico e social.',

    // Projeto 5
    project5: 'Atlas de Histologia Digital do IFC Araquari',
    project5Description:
      'Uma plataforma digital que fornece acesso a imagens de histologia e conteúdo educacional para estudantes de medicina veterinária. O projeto visa melhorar o aprendizado através da visualização interativa de amostras de tecidos.',

    // Seção Contato
    contact1: 'Quer iniciar um projeto?',
    contact2: 'Vamos conversar...',
    contact3: 'Entre em contato',

    // Rodapé
    footer1: 'Desenvolvido por',
    backTop: 'Voltar ao Topo',
  },
}

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
})

export default i18n
