<template>
	<Header></Header>
	<div class="main-content">
		<div class="form-container">
			<h1>ESPACE VISITEUR</h1>
			<form class="login-form">
				<h2>LOGIN</h2>
				<h3>username</h3>
				<input type="text" />
				<h3>password</h3>
				<input type="password" />
				<button
					type="submit"
					class="login"
				>
					LOGIN
				</button>
			</form>
			<hr />
			<form class="signup-form">
				<h2>SIGNUP</h2>
				<h3>username</h3>
				<input type="text" />
				<h3>password</h3>
				<input type="password" />
				<button
					type="submit"
					class="signup"
				>
					SIGNUP
				</button>
			</form>
		</div>
		<Footer></Footer>
	</div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: "Poppins", sans-serif;
	scroll-behavior: smooth;
	background-color: #49290b;
	color: #ffd39f;
}

.main-content {
	padding-top: 3%;
	.form-container {
		max-width: 1920px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		h1 {
			width: 100%;
			margin-bottom: 5%;
			letter-spacing: 25px;
			text-indent: 25px;
		}
		.login-form,
		.signup-form {
			margin-bottom: 30px;
			width: 30%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		h2 {
			margin: 0 0 45px 0;
			font-size: 30px;
			font-weight: 500;
		}
		h3 {
			margin: 0 0 3px 0;
			font-size: 16px;
			font-weight: 300;
		}
		input[type="text"],
		input[type="password"] {
			width: 60%;
			margin-bottom: 20px;
			padding: 1em 1em;
			color: #49290b;
			border: none;
			background-color: #fff;
		}
		button.signup,
		button.login {
			width: 45%;
			padding: 0.2em;
			border-radius: 2em;
			border: none;
			cursor: pointer;
			background-color: #ffd39f;
			color: #49290b;
			font-size: 26px;
			letter-spacing: 4px;
			text-indent: 4px;
			font-weight: 600;
			transition: 0.1s;
		}
		button.signup:hover,
		button.login:hover {
			color: #ffd39f;
			background-color: #49290b;
			border: 1px solid #ffd39f;
		}
		button.signup:active,
		button.login:active {
			background-color: #ffd39f;
		}
		hr {
			border: 1px solid white;
		}
	}
}

@media (max-width: 1919px) {
	.main-content {
		padding-top: 2%;
		.form-container {
			max-width: 1280px;
			h1 {
				margin-bottom: 4%;
				letter-spacing: 20px;
				text-indent: 20px;
				font-size: 26px;
			}
			.login-form,
			.signup-form {
				margin-bottom: 30px;
				h2 {
					margin: 0 0 28px 0;
					font-size: 26px;
				}
				h3 {
					margin: 0 0 2px 0;
					font-size: 14px;
				}
				input[type="text"],
				input[type="password"] {
					margin-bottom: 15px;
					padding: 0.7em 1em;
				}
				button.signup,
				button.login {
					font-size: 18px;
					letter-spacing: 4px;
					text-indent: 4px;
				}
			}
		}
	}
}
@media (max-width: 1279px) {
	.main-content {
		padding-top: 2%;
		.form-container {
			max-width: 800px;
			h1 {
				margin-bottom: 4%;
				letter-spacing: 15px;
				text-indent: 15px;
				font-size: 18px;
			}
			.login-form,
			.signup-form {
				margin-bottom: 30px;
				h2 {
					margin: 0 0 20px 0;
					font-size: 20px;
				}
				h3 {
					margin: 0 0 2px 0;
					font-size: 12px;
				}
				input[type="text"],
				input[type="password"] {
					margin-bottom: 15px;
					padding: 0.4em 1em;
				}
				button.signup,
				button.login {
					font-size: 15px;
					letter-spacing: 2px;
					text-indent: 2px;
				}
			}
		}
	}
}
@media (max-width: 799px) {
	.main-content {
		padding-top: 2%;
		.form-container {
			max-width: 360px;
			h1 {
				margin-bottom: 4%;
				letter-spacing: 8px;
				text-indent: 8px;
				font-size: 12px;
			}
			.login-form,
			.signup-form {
				margin-bottom: 30px;
				h2 {
					margin: 0 0 10px 0;
					font-size: 15px;
				}
				h3 {
					margin: 0;
					font-size: 9px;
				}
				input[type="text"],
				input[type="password"] {
					margin-bottom: 15px;
					padding: 0 0.8em;
				}
				button.signup,
				button.login {
					font-size: 8px;
					letter-spacing: 1px;
					text-indent: 1px;
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
			headerTextColor: "#FFD39F",
			headerBgColor: "#FFD39F",
		};
	},
};
</script>
