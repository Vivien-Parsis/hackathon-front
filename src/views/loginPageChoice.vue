<template>
    <Header :headerTextColor="headerTextColor" :headerBgColor="headerBgColor"></Header>
    <div class="link-container">
      <div class="link-part">
        <a href="/loginAdmin" class="Admin-link">
          <p>ESPACE ADMIN</p>
        </a>
        <a href="/loginUser" class="User-link">
          <p>ESPACE VISITEUR</p>
        </a>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  </template>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Poppins", sans-serif;
  }
  .vue-header{
    width: 100%;
  }
  .link-container {
    background-color: #49290B;
    color: #FFD39F;
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding: 50px 0;
  }
  
  .link-part {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #49290B;
  }
  
  .Admin-link,
  .User-link {
    text-decoration: none;
    color: #FFD39F;
    background-color: #49290B;
    border: 4px solid #FFD39F;
    margin: 0 10px;
  }
  
  .Admin-link p,
  .User-link p {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 90px;
  }
  
  p:hover {
    box-shadow: inset 800px 0 0 0 #FFD39F;
    color: #49290B;
  }
  
  .footer-container {
    margin: 0;
    text-align: center;
  }
  
  </style>
  
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
  
