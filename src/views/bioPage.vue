<template>
    <Header :textColor="headerTextColor" :bgColor="headerBgColor"></Header>
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
      };
    },
  };
</script>