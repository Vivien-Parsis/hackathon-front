<template>
	<Header
		:textColor="headerTextColor"
		:bgColor="headerBgColor"
	></Header>
	<div class="main">
		<div class="bio-container">
			<h1>BIO</h1>
			<div class="beginning-container">
				<h2>LES DEBUTS</h2>
				<p>
					J'ai découvert ma passion pour la photographie alors que
					j'étais jeune. Ayant reçu comme cadeau un appareil photo, le
					Finepix Real 3D W3, j'ai découvert ainsi la joie
					d'immortaliser des moments du quotidien. Prenant peu à peu
					mes marques, je passais mon temps à prendre des photos de
					tout et de rien, découvrant petit à petit une véritable
					passion.
				</p>
			</div>
			<div class="studies-container">
				<h2>LES ETUDES</h2>
				<p>
					Grâce à cette passion, j'ai entrepris des études et obtenu
					mon BTS Photographie. Je me suis ensuite lancé dans la
					photographie indépendante, travaillant avec des entreprises
					immobilières ainsi que sur des publicités. Cependant, pour
					moi, la base du métier reste les photos d'identité et les
					selfies. Ce sont souvent les visages humains à l'état
					naturel qui sont les plus représentatifs de l'âme.
				</p>
			</div>
			<div class="nowadays-container">
				<h2>AUJOURD'HUI</h2>
				<p>
					Après de nombreuses expériences riches en apprentissage,
					j'en suis venu à la conclusion que ce que je préférais dans
					la photographie était le portrait. Capturer l'image même du
					visage de la personne afin de la mettre en valeur est pour
					moi une véritable passion. À travers de mon portfolio, vous
					y verrez les différents aspects de cet art et de mon
					travail.
				</p>
			</div>
			<Footer></Footer>
		</div>
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

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: "Poppins", sans-serif;
	scroll-behavior: smooth;
}
.main {
	background-color: #49290b;
	.bio-container {
		margin: auto;
		max-width: 1920px;
		display: flex;
		flex-wrap: wrap;
		h1 {
			width: 100%;
			color: #ffd39f;
			font-size: 300px;
			letter-spacing: 330px;
			text-indent: 380px;
		}
		.beginning-container,
		.studies-container {
			width: 40%;
			height: 967px;
			margin: auto;
			text-align: justify;
			border: 4px solid #ffd39f;
			h2 {
				text-align: center;
				font-size: 90px;
				background-color: #ffd39f;
				color: #49290b;
				padding: 0.5em;
			}
			p {
				padding: 1.5em;
				color: #ffd39f;
				font-size: 35px;
			}
		}
		.nowadays-container {
			width: 90.4%;
			margin: 4% auto auto auto;
			text-align: justify;
			border: 4px solid #ffd39f;
			h2 {
				text-align: center;
				font-size: 90px;
				background-color: #ffd39f;
				color: #49290b;
				padding: 0.5em;
			}
			p {
				padding: 1.5em;
				color: #ffd39f;
				font-size: 35px;
			}
		}
		.footer-container {
			width: 100%;
			margin: 2% auto auto auto;
		}
	}
}

@media (max-width: 1919px) {
	.main {
		.bio-container {
			max-width: 1280px;
			h1 {
				font-size: 200px;
				letter-spacing: 250px;
				text-indent: 220px;
			}
			.beginning-container,
			.studies-container {
				height: 627px;
				border: 4px solid #ffd39f;
				h2 {
					font-size: 60px;
					padding: 0.4em;
				}
				p {
					padding: 1em;
					font-size: 24px;
				}
			}
			.nowadays-container {
				border: 4px solid #ffd39f;
				h2 {
					font-size: 60px;
					padding: 0.4em;
				}
				p {
					padding: 1em;
					font-size: 24px;
				}
			}
		}
	}
	.footer-container {
		width: 100%;
		margin: auto;
	}
}
@media (max-width: 1279px) {
	.main {
		.bio-container {
			max-width: 800px;
			h1 {
				font-size: 100px;
				letter-spacing: 150px;
				text-indent: 170px;
			}
			.beginning-container,
			.studies-container {
				height: 456px;
				border: 4px solid #ffd39f;
				h2 {
					font-size: 40px;
					padding: 0.2em;
				}
				p {
					padding: 0.8em;
					font-size: 18px;
				}
			}
			.nowadays-container {
				border: 4px solid #ffd39f;
				h2 {
					font-size: 40px;
					padding: 0.2em;
				}
				p {
					padding: 0.8em;
					font-size: 18px;
				}
			}
		}
	}
}
@media (max-width: 799px) {
	.main {
		.bio-container {
			max-width: 360px;
			h1 {
				font-size: 50px;
				letter-spacing: 80px;
				text-indent: 60px;
			}
			.beginning-container,
			.studies-container {
				height: 257px;
				border: 2px solid #ffd39f;
				h2 {
					font-size: 20px;
					padding: 0.1em;
				}
				p {
					padding: 0.8em;
					font-size: 9px;
				}
			}
			.nowadays-container {
				border: 2px solid #ffd39f;
				h2 {
					font-size: 20px;
					padding: 0.1em;
				}
				p {
					padding: 0.8em;
					font-size: 9px;
				}
			}
		}
	}
}
</style>
