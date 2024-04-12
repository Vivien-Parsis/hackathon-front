<template>
  <Header :textColor="headerTextColor" :bgColor="headerBgColor"></Header>

  <div class="main">
    <div class="projects" id="project">
      <h1>PROJECTS</h1>
      <div class="project-container">
        <!-- Utilisation de v-for pour itérer à travers les liens -->
        <a class="project" v-for="project in projects" :key="project" :href="`/projects/${project.toLowerCase()}`">{{ project }}</a>
      </div>
    </div>
  </div>
  
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      headerTextColor: '#49290B',
      headerBgColor: '#FFD39F',
      projects: ['AYMERIK', 'MISHA', 'FLAVIO', 'MATHIS','RACHID'] // Ajoutez les noms des projets ici
    };
  },
};
</script>
