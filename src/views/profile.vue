<template>
	<Header
		:headerTextColor="headerTextColor"
		:headerBgColor="headerBgColor"
	></Header>
	<div class="container">
        <div class="content">
          <h1 class="admin-title">ESPACE PROFILE</h1>
          <form class="login-form" @submit.prevent="update">
            <h2>username</h2>
            <input type="text" class="input-field">
            <button type="submit" class="login-button">Mise à jour</button>
            <button type="submit" class="login-button">Supprimer</button>
            <button type="submit" class="login-button">Déconnexion</button>
          </form>
        </div>
    </div>
	<div>
		<Footer></Footer>
	</div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: "Poppins", sans-serif;
	background-color: #49290b;
	color: #ffd39f;
}

.container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: calc(100vh - 98px);
      color: #fff;
      .content {
        margin-top: 8%;
        .admin-title {
          width: 100%;
          text-align: center;
          letter-spacing: 40px;
          text-indent: 40px;
          font-weight: 500;
          font-size: 35px;
          color: "#FFD39F";
        }
        .login-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          .input-field {
            width: 50%;
            margin: 0 0 10px 0;
            padding: .3em;
            background-color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 26px;
            font-weight: 500;
            color: #000000; 
          }
          h2 {
            font-weight: 300;
            font-size: 25px;
          }
		button.login-button {
			width: 45%;
			padding: 0.2em;
			border-radius: 2em;
			border: none;
			cursor: pointer;
            margin-bottom: 15px;
			background-color: #ffd39f;
			color: #49290b;
			font-size: 26px;
			letter-spacing: 4px;
			text-indent: 4px;
			font-weight: 600;
			transition: 0.1s;
		}
		button.login-button:hover {
			color: #ffd39f;
			background-color: #49290b;
			border: 1px solid #ffd39f;
		}
		button.login-button:active {
			background-color: #ffd39f;
		}
        }
      }
    }
.footer-container {
	width: 100%;
	margin: auto;
}


</style>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			headerTextColor: "#49290B",
			headerBgColor: "#FFD39F",
		};
	},
};
</script>