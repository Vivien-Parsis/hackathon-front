<template>
	<Header
		:textColor="headerTextColor"
		:bgColor="headerBgColor"
	></Header>
	<div class="main">
		<div
			class="projectsd"
			id="projectd"
		>
			<h1>{{ personName }}</h1>
			<div class="project-container">
				<div
					v-for="(person, index) in people"
					:key="index"
				>
					<div v-if="personName === person.name">
						<div
							v-for="(image, i) in person.images"
							:key="i"
						>
							<img
								:src="getImageUrl(image.src)"
								:alt="image.alt"
							/>
						</div>
					</div>
				</div>
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
	.projectsd {
		max-width: 1920px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		h1 {
			margin-bottom: 5%;
			width: 100%;
			font-size: 110px;
			letter-spacing: 50px;
			text-indent: 50px;
			font-weight: 600;
			text-align: center;
		}
		.project-container {
			div {
				div {
					display: flex;
					flex-wrap: wrap;
					div {
						width: 40%;
						margin: 5%;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						img {
							object-fit: contain;
							width: 100%;
						}
					}
				}
			}
		}
	}
	.footer-container {
		width: 100%;
	}
}

@media (max-width: 1919px) {
	.main {
		.projectsd {
			max-width: 1280px;
			h1 {
				font-size: 75px;

			}
			.project-container {
				div {
					div {
						div {
							img {
								width: 80%;
							}
						}
					}
				}
			}
		}
	}
}
@media (max-width: 1279px) {
	.main {
		.projectsd {
			max-width: 800px;
			h1 {
				font-size: 55px;
				letter-spacing: 25px;
				text-indent: 25px;
			}
			.project-container {
				div {
					div {
						div {
							margin-bottom: 1%;
							img {
								width: 80%;
							}
						}
					}
				}
			}
		}
	}
}
@media (max-width: 799px) {
	.main {
		.projectsd {
			max-width: 360px;
			h1 {
				font-size: 25px;
				letter-spacing: 12px;
				text-indent: 12px;
			}
			.project-container {
				div {
					div {
						div {
							width: 50%;
							margin-bottom: 5%;
							img {
								width: 80%;
							}
						}
					}
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
			people: [
				{
					name: "AYMERIK",
					images: [
						{ src: "aymerik/slide1.jpg", alt: "Image Aymerik 1" },
						{ src: "aymerik/slide2.jpg", alt: "Image Aymerik 2" },
						{ src: "aymerik/slide3.jpg", alt: "Image Aymerik 3" },
					],
				},
				{
					name: "FLAVIO",
					images: [
						{ src: "flavio/6-_MG_2375.jpg", alt: "Image flavio 1" },
						{ src: "flavio/8-DSCF6601.jpg", alt: "Image flavio 2" },
						{
							src: "flavio/31-EMA08369.jpg",
							alt: "Image flavio 3",
						},
						{
							src: "flavio/36-DSCF7871.jpg",
							alt: "Image flavio 4",
						},
					],
				},
				{
					name: "MATHIS",
					images: [
						{
							src: "mathis/32-_MG_8493.jpg",
							alt: "Image mathis 1",
						},
						{
							src: "mathis/33-_MG_8565.jpg",
							alt: "Image mathis 2",
						},
						{
							src: "mathis/34-_MG_8574.jpg",
							alt: "Image mathis 3",
						},
						{
							src: "mathis/35-_MG_8579.jpg",
							alt: "Image mathis 4",
						},
					],
				},
				{
					name: "MISHA",
					images: [
						{ src: "misha/10-_MG_1179.jpg", alt: "Image misha 1" },
						{ src: "misha/20-_MG_5263.jpg", alt: "Image misha 2" },
						{ src: "misha/21-_MG_5265.jpg", alt: "Image misha 3" },
						{ src: "misha/22-_MG_5270.jpg", alt: "Image misha 4" },
						{ src: "misha/23-_MG_5272.jpg", alt: "Image misha 5" },
						{ src: "misha/24-_MG_5275.jpg", alt: "Image misha 6" },
						{ src: "misha/25-_MG_5289.jpg", alt: "Image misha 7" },
					],
				},
				{
					name: "RACHID",
					images: [
						{ src: "rachid/1-_MG_8642.jpg", alt: "Image rachid 1" },
						{
							src: "rachid/2-_MG_1333_1.jpg",
							alt: "Image rachid 2",
						},
						{
							src: "rachid/11-_MG_2206.jpg",
							alt: "Image rachid 3",
						},
						{
							src: "rachid/12-IMG_2402.jpg",
							alt: "Image rachid 4",
						},
					],
				},
			],
			personName: "PROJECTS",
		};
	},
	methods: {
		updatePersonNameFromUrl() {
			const currentPath = window.location.pathname;
			const person = currentPath.split("/").pop().toUpperCase();
			if (this.people.some((p) => p.name === person)) {
				this.personName = person;
			}
		},
		getImageUrl(src) {
			return `https://hackathon-kud9.onrender.com/assets/img/photographie/${src}`;
		},
	},
	mounted() {
		this.updatePersonNameFromUrl();
	},
};
</script>
