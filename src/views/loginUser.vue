<template>
    <Header></Header>
    <div class="main-content">
        <h1>ESPACE VISITEUR</h1>
        <div class="form-container">
            <form class="login-form">
                <h2>LOGIN</h2>
                <h3>Username</h3>
                <input type="text">
                <h3>Password</h3>
                <input type="password">
                <button type="submit" class="signup">LOGIN</button>
            </form>
            <hr>
            <form class="signup-form">
                <h2>SIGNUP</h2>
                <h3>Username</h3>
                <input type="text">
                <h3>Password</h3>
                <input type="password">
                <button type="submit" class="signup">SIGNUP</button>
            </form>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
    background-color: #49290B;
}

h1 {
    font-family: "Poppins", sans-serif;
    width: 100%;
    margin-bottom: 50px;
    letter-spacing: 20px; 
}

.main-content {
    background-color: #49290B;
    color: #FFD39F;
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding: 50px 0;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.login-form,
.signup-form {
    width: 300px;
    margin: 20px;
    height: 350px; 
}

h2  {
    margin: 0;
    margin-bottom: 20px;
    margin-top:20px;
}

h3 {
    margin: 0;
    margin-bottom: 20px;
    margin-top:20px;
    font-size: 14px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    margin-bottom: 20px; 
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #FFD39F;
    background-color: #fff; 
}

button.signup {
    width: 50%;
    margin-bottom: 10px;
    padding: 6px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #FFD39F;
    color: #49290B;
}

hr {
    border: none;
    margin-left: 15px;
    border-left: 10px solid #fff; 
    border-top: 85px solid #fff; 
    border-bottom: 270px solid #fff; 
    color: #333;
    overflow: visible;
    text-align: center;
    width: 3px; 
    height: 100%; 
}

div.footer-container{
    margin: 0px;
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
        headerTextColor: '#FFD39F',
        headerBgColor: '#FFD39F',
      };
    },
  };
</script>

