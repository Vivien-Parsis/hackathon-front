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
            <h2>password</h2>
            <input type="password" class="input-field">
            <button type="submit" class="login-button">UPDATE</button>
            <button type="submit" class="login-button">DELETE</button>
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
          color: #ff3f34;
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
            color: #fff;
          }
          h2 {
            font-weight: 300;
            font-size: 25px;
          }
          .login-button {
            width: 40%;
            background-color: #ebe8e8;
            color: #292929;
            border: none;
            border-radius: 2em;
            font-size: 30px;
            letter-spacing: 5px;
            text-indent: 5px;
            cursor: pointer;
            margin: 10px 0;
            transition: .1s;
            font-weight: 600;
          }
          .login-button:hover {
            background-color: #292929;
            color: white;
          }
          .login-button:active {
            background-color: white;
          }
        }
      }
    }
.footer-container {
	width: 100%;
	margin: auto;
}

@media (max-width: 1919px) {
	.link-container {
		padding: 9.5em 3em;
		.login-buttons {
			max-width: 1280px;
			#admin-link,
			#user-link {
				padding: 1.2em 0em;
				border: 1.5px solid #ffd39f;
				h3 {
					font-size: 15px;
					letter-spacing: 18px;
					text-indent: 18px;
				}
			}
		}
	}
}
@media (max-width: 1279px) {
	.link-container {
		padding: 6em 2em;
		.login-buttons {
			max-width: 800px;
			#admin-link,
			#user-link {
				padding: 0.7em 0em;
				border: 1.2px solid #ffd39f;
				h3 {
					font-size: 10px;
					letter-spacing: 13px;
					text-indent: 13px;
				}
			}
		}
	}
}
@media (max-width: 799px) {
	.link-container {
		padding: 4em 1em;
		.login-buttons {
			max-width: 360px;
			#admin-link,
			#user-link {
				padding: 0.4em 0em;
				border: 1px solid #ffd39f;
				h3 {
					font-size: 5px;
					letter-spacing: 6px;
					text-indent: 6px;
				}
			}
		}
	}
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