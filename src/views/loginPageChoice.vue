<template>
	<Header
		:headerTextColor="headerTextColor"
		:headerBgColor="headerBgColor"
	></Header>
	<div class="link-container">
		<div class="login-buttons">
			<a
				id="admin-link"
				href="/loginAdmin"
			>
				<h3>ESPACE ADMIN</h3>
			</a>
			<a
				id="user-link"
				href="/loginUser"
			>
				<h3>ESPACE VISITEUR</h3>
			</a>
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

.link-container {
	padding: 10em 4em;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	.login-buttons {
		max-width: 1920px;
		width: 100%;
		margin: auto;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		#admin-link,
		#user-link {
			width: 40%;
			margin: auto;
			padding: 1.5em 0em;
			text-align: center;
			text-decoration: none;
			border: 2px solid #ffd39f;
			cursor: pointer;
			transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
			h3 {
				background-color: transparent;
				font-weight: 500;
				font-size: 18px;
				letter-spacing: 30px;
				text-indent: 30px;
			}
		}
		#admin-link:hover,
		#user-link:hover {
			box-shadow: inset 0 150px 0 0 #ffd39f;
		}
		h3:hover {
			color: #49290b;
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
