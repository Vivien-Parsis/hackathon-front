<template>
	<Header
		:headerTextColor="headerTextColor"
		:headerBgColor="headerBgColor"
	></Header>
	<div class="header-container">
		<div class="header-text">
			<h1 id="photographe">PHOTOGRAPHE</h1>
			<h1 id="independant">INDEPENDANT</h1>
			<div class="next-section">
				<a href="#projects"><h1 id="downarrow">▼</h1></a>
			</div>
		</div>
	</div>
	<div class="main">
		<div
			class="projects-container"
			id="projects"
		>
			<h1>différents projets</h1>
			<a
				class="aymerik"
				href="/projects"
				><h2>AYMERIK</h2></a
			>
			<a
				class="misha"
				href="/projects"
				><h2>MISHA</h2></a
			>
			<a
				class="flavio"
				href="/projects"
				><h2>FLAVIO</h2></a
			>
			<a
				class="mathis"
				href="/projects"
				><h2>MATHIS</h2></a
			>
		</div>
		<div class="informations-container">
			<div id="leftside">
				<div class="bio-redirection">
					<h2>BIO</h2>
					<a
						class="redirect-button"
						href="/bio"
						><p>Follow here</p></a
					>
				</div>

				<div class="contact-container">
					<h2>CONTACT</h2>
					<div id="email-container">
						<h3 id="email-title">Email</h3>
					</div>
					<div id="number-container">
						<h3 id="number-title">Numéro</h3>
					</div>
					<div id="linkedin-container">
						<h3 id="linkedin-title">Linkedin</h3>
					</div>
				</div>
			</div>

			<div class="equipments-informations">
				<h2>MATERIEL</h2>
				<div class="equipments-informations-container">
					<h3>APPAREIL 1</h3>
					<p>Canon EOS Rp</p>
					<h3>APPAREIL 2</h3>
					<p>Leica Q2</p>
					<h3>OBJECTIF 1</h3>
					<p>55-200mm t/4.5-6.3</p>
					<h3>OBJECTIF 2</h3>
					<p>15-45mm t/3.5-6</p>
					<h3>FLASH</h3>
					<p>Canon Speedlite EL-5</p>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

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

<style>
* {
	margin: 0;
	padding: 0;
	font-family: "Poppins", sans-serif;
	scroll-behavior: smooth;
}

.header-container {
	background-color: #ffd39f;

	.header-text {
		background-color: #ffd39f;
		max-width: 1920px;
		margin: auto;

		h1 {
			background-color: transparent;
			font-size: 200px;
			font-weight: 600;
			color: #49290b;
		}

		#photographe,
		#independant {
			margin-left: 25px;
		}

		#independant {
			color: #ffd39f;
			-webkit-text-stroke: 6px #49290b;
			letter-spacing: 11px;
			margin-top: -130px;
		}

		.next-section {
			display: flex;
			justify-content: center;
			background-color: transparent;

			a {
				background-color: transparent;
				text-decoration: none;
			}

			a:hover {
				cursor: pointer;
			}
		}
	}
}

.main {
	width: 100%;
	background-color: #49290b;
}

.projects-container {
	max-width: 1920px;
	margin: auto;
	padding: 2em;
	h1 {
		font-family: "Montserrat", sans-serif;
		font-style: italic;
		font-weight: 400;
		font-size: 70px;
		color: #ffd39f;
		margin: 100px 0 0 100px;
		transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}
	h1:hover {
		box-shadow: inset 600px 0 0 0 #ffd39f;
		color: #49290b;
	}
	a {
		cursor: pointer;
		text-decoration: none;
	}

	h2 {
		width: fit-content;
		transition: 0.1s;
		font-size: 90px;
		font-weight: 500;
		color: #ffd39f;
		margin: 100px 0 100px 50px;
	}
	h2:hover {
		border-bottom: 5px solid #ffd39f;
	}
}

.informations-container {
	max-width: 1920px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;

	#leftside {
		width: 55%;
		margin-left: 100px;
	}

	.bio-redirection {
		display: flex;
		flex-wrap: wrap;
		border: 8px solid #ffd39f;
		h2 {
			width: 100%;
			font-size: 130px;
			font-weight: 600;
			text-align: center;
			letter-spacing: 2.8em;
			text-indent: 0.3em;
			color: #49290b;
			background-color: #ffd39f;
		}
		a {
			width: 100%;
			text-decoration: none;
			p {
				margin: auto;
				text-align: center;
				border: none;
				font-size: 95px;
				font-weight: 500;
				letter-spacing: 0.43em;
				text-indent: 0.4em;
				color: #ffd39f;
				transition: 0.2s;
			}
		}
		p:hover {
			background-color: #ffd39f;
			color: #49290b;
		}
	}

	.contact-container {
		border: 8px solid #ffd39f;
		color: #ffd39f;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		h2 {
			width: 100%;
			font-size: 115px;
			letter-spacing: 0.6em;
			text-indent: 0.2em;
			font-weight: 600;
		}
		div {
			width: 100%;
			margin-left: 20px;
			font-size: 80px;
			h3 {
				font-weight: 400;
			}
		}
		#email-title {
			letter-spacing: 0.2em;
		}
		#number-title {
			letter-spacing: 0.25em;
		}
		#linkedin-title {
			letter-spacing: 0.32em;
		}
		div:hover h3 {
			display: none;
		}
		#email-container:hover:before {
			content: "sacha.authier@gmail.com";
			letter-spacing: 0;
			font-size: 75px;
		}
		#number-container:hover:before {
			content: "07.67.64.74.58";
			letter-spacing: 0;
			font-size: 75px;
		}
		#linkedin-container:hover:before {
			content: "https://tinyurl.com/4est5t39";
			letter-spacing: 0;
			font-size: 65px;
		}
	}

	.equipments-informations {
		width: 30%;
		display: flex;
		flex-wrap: wrap;
		border: 8px solid #ffd39f;
		margin-left: 30px;
		margin-right: 100px;
		h2 {
			width: 20%;
			font-size: 85px;
			writing-mode: vertical-rl;
			text-orientation: upright;
			background-color: #ffd39f;
			color: #49290b;
		}
		.equipments-informations-container {
			width: 80%;
			color: #ffd39f;
			text-align: center;
		}
		h3,
		p {
			margin: 34px 0;
		}
		h3 {
			font-size: 45px;
			font-weight: 600;
		}
		p {
			font-weight: 300;
			font-size: 30px;
		}
	}
}

@media (max-width: 1919px) {
	.header-container .header-text {
		max-width: 1280px;

		h1 {
			font-size: 130px;
		}
		#independant {
			margin-top: -90px;
			letter-spacing: 7px;
			-webkit-text-stroke: 4px #49290b;
		}
	}

	.projects-container {
		max-width: 1280px;
		h1 {
			font-size: 50px;
			margin: 50px 0 0 80px;
		}
		h1:hover {
			box-shadow: inset 430px 0 0 0 #ffd39f;
		}
		h2 {
			font-size: 60px;
			margin: 50px 0 50px 30px;
		}
	}

	.informations-container {
		max-width: 1280px;
		#leftside {
			margin-left: 50px;
		}
		.bio-redirection {
			h2 {
				font-size: 85px;
			}
			a p {
				font-size: 60px;
			}
		}

		.contact-container {
			h2 {
				font-size: 75px;
			}
			div {
				font-size: 50px;
			}
			#email-container:hover:before,
			#number-container:hover:before,
			#linkedin-container:hover:before {
				font-size: 45px;
			}
		}

		.equipments-informations {
			margin-right: 50px;
			h2 {
				font-size: 55px;
			}
			.equipments-informations-container {
				h3,
				p {
					margin: 20px 0;
				}
				h3 {
					font-size: 30px;
				}
				p {
					font-size: 22px;
				}
			}
		}
	}
}

@media (max-width: 1279px) {
	.header-container .header-text {
		max-width: 800px;

		h1 {
			font-size: 80px;
		}
		#independant {
			font-size: 75px;
			margin-top: -55px;
			letter-spacing: 8px;
			-webkit-text-stroke: 3px #49290b;
		}
	}

	.projects-container {
		max-width: 800px;
		h1 {
			font-size: 35px;
			margin: 40px 0 0 60px;
		}
		h1:hover {
			box-shadow: inset 300px 0 0 0 #ffd39f;
		}
		h2 {
			font-size: 40px;
			margin: 40px 0 40px 22px;
		}
		h2:hover {
			border-bottom: 3px solid #ffd39f;
		}
	}

	.informations-container {
		max-width: 800px;
		#leftside {
			margin-left: 20px;
		}
		.bio-redirection {
			border: 4px solid #ffd39f;
			h2 {
				font-size: 55px;
			}
			a p {
				font-size: 38px;
			}
		}

		.contact-container {
			border: 4px solid #ffd39f;
			h2 {
				font-size: 47px;
			}
			div {
				font-size: 35px;
			}
			#email-container:hover:before,
			#number-container:hover:before,
			#linkedin-container:hover:before {
				font-size: 28px;
			}
		}

		.equipments-informations {
			border: 4px solid #ffd39f;
			margin-right: 20px;
			h2 {
				font-size: 37px;
			}
			.equipments-informations-container {
				h3,
				p {
					margin: 14px 0;
				}
				h3 {
					font-size: 20px;
				}
				p {
					font-size: 15px;
				}
			}
		}
	}
}
@media (max-width: 799px) {
	.header-container .header-text {
		max-width: 360px;

		h1 {
			font-size: 40px;
		}
		#photographe,
		#independant {
			margin-left: 0px;
		}
		#independant {
			font-size: 35px;
			margin-top: -27px;
			margin-left: 1px;
			letter-spacing: 5.5px;
			-webkit-text-stroke: 1px #49290b;
		}
	}

	.projects-container {
		max-width: 360px;
		padding: 1em;

		h1 {
			font-size: 18px;
			margin: 0 0 0 5px;
		}
		h1:hover {
			box-shadow: inset 155px 0 0 0 #ffd39f;
		}
		h2 {
			font-size: 25px;
			margin: 20px 0 20px 12px;
		}
		h2:hover {
			border-bottom: 2px solid #ffd39f;
		}
	}

	.informations-container {
		max-width: 360px;
		#leftside {
			margin-left: 5px;
		}
		.bio-redirection {
			border: 3px solid #ffd39f;
			h2 {
				font-size: 23.5px;
			}
			a p {
				font-size: 17px;
			}
		}

		.contact-container {
			border: 3px solid #ffd39f;
			h2 {
				font-size: 21.3px;
			}
			div {
				font-size: 15px;
				margin-left: 5px;
			}
			#email-container:hover:before,
			#number-container:hover:before,
			#linkedin-container:hover:before {
				font-size: 12px;
			}
		}

		.equipments-informations {
			border: 3px solid #ffd39f;
			margin-right: 5px;
			margin-left: 20px;
			h2 {
				font-size: 17px;
			}
			.equipments-informations-container {
				h3,
				p {
					margin: 6px 0;
				}
				h3 {
					font-size: 10px;
				}
				p {
					font-size: 7px;
				}
			}
		}
	}
}
</style>
