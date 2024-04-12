<template>
	<Header
		:textColor="headerTextColor"
		:bgColor="headerBgColor"
	></Header>

	<div class="main">
		<div
			class="projects"
			id="project"
		>
			<h1>PROJETS</h1>
			<div class="project-container">
				<a
					class="project"
					v-for="project in projects"
					:key="project"
					:href="`/projects/${project.toLowerCase()}`"
				>
					{{ project }}
				</a>
			</div>
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

.main {
	margin: auto;
	.projects {
		width: 100%;
		max-width: 1920px;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		h1 {
			width: 100%;
			font-size: 85px;
			letter-spacing: 20px;
			text-indent: 20px;
			color: #ffd39f;
			text-align: center;
		}
		.project-container {
			display: flex;
			flex-wrap: wrap;
			padding: 2em;
			a {
				text-align: center;
				width: 33.33%;
				font-size: 55px;
				letter-spacing: 30px;
				text-indent: 30px;
				margin: 100px auto;
				text-decoration: none;
				font-weight: 600;
				transition: 0.2s;
			}
			a:hover {
				border-bottom: 4px solid;
			}
		}
	}
	.footer-container {
		width: 100%;
	}
}

@media (max-width: 1919px) {
	.main {
		.projects {
			max-width: 1280px;
			h1 {
				font-size: 70px;
				letter-spacing: 16px;
				text-indent: 16px;
				font-weight: 700;
			}
			.project-container {
				padding: 1.5em;
				a {
					font-size: 40px;
					margin: 70px auto;
					letter-spacing: 25px;
					text-indent: 25px;
					font-weight: 600;
				}
				a:hover {
					border-bottom: 3px solid;
				}
			}
		}
	}
}
@media (max-width: 1279px) {
	.main {
		.projects {
			max-width: 800px;
			h1 {
				font-size: 50px;
				letter-spacing: 13px;
				text-indent: 13px;
				font-weight: 600;
			}
			.project-container {
				padding: 1em;
				a {
					font-size: 30px;
					margin: 35px auto;
					letter-spacing: 12px;
					text-indent: 12px;
					font-weight: 500;
				}
				a:hover {
					border-bottom: 2px solid;
				}
			}
		}
	}
}
@media (max-width: 799px) {
	.main {
		.projects {
			max-width: 360px;
			h1 {
				font-size: 25px;
				letter-spacing: 10px;
				text-indent: 10px;
				font-weight: 600;
			}
			.project-container {
				padding: 0.7em;
				a {
					width: 50%;
					font-size: 17px;
					margin: 20px auto;
					letter-spacing: 13px;
					text-indent: 13px;
					font-weight: 500;
				}
				a:hover {
					border-bottom: 1px solid;
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
			projects: ["AYMERIK", "MISHA", "FLAVIO", "MATHIS", "RACHID"], // Ajoutez les noms des projets ici
		};
	},
};
</script>
