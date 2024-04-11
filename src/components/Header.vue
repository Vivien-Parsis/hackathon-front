<template>
    <header class="vue-header" :style="{ backgroundColor: headerBgColor[$route.path]}" >
        <div class="nav-container">
            <nav class="nav"> 
                <a class="logo-header" href="/">
                    <img v-if="headerTextColor[$route.path] == '#49290B'" :src="iconColor.darkBrown" :alt="iconColor.darkBrownAlt">
                    <img v-else :src="iconColor.cream" :alt="iconColor.creamAlt">
                </a>
                <ul>
                    <a href='/projects' :style="{ color: headerTextColor[$route.path] }"><p>PROJETS</p></a>
                    <a href='/bio' :style="{ color: headerTextColor[$route.path] }"><p>BIO</p></a>
                    <a href='/loginChoice' :style="{ color: headerTextColor[$route.path] }"><p>LOGIN</p></a>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            headerTextColor: {
                '/': '#49290B',
                '/bio': '#FFD39F',
            },
            headerBgColor: {
                '/' : '#FFD39F',
                '/bio': '#49290B',
            },
            iconColor: {
                cream: 'https://hackathon-kud9.onrender.com/assets/img/icone/logocream.png',
                creamAlt: 'cream icon',
                darkBrown: 'https://hackathon-kud9.onrender.com/assets/img/icone/logodarkbrown.png',
                darkBrownAlt: 'darkbrown icon'
            }
        
        }
    },
  
};
</script>

<style>

* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
}
.nav-container {
    max-width: 1920px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    .nav {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .logo-header {
            width: 20%;
            display: flex;
            img {
                width: 50%;
                margin-left: 4%;
                margin-top: 2%;
            }
        }
        ul {
            width: 80%;
            display: flex;
            justify-content: right;
            padding-top: 2%;
            a {
                font-weight: 700;
                font-size: 25px;
                text-decoration: none;
                margin: 0 25px 0 0;
                transition: ease-in-out;
                transition-duration: 0.3s;
                justify-content: right;
                letter-spacing: 9px;
                
            }
            p {
                transition: .1s;
            }
            p:hover {
                border-bottom: 3px solid;
            }
        }

    }
}

@media (max-width: 1919px) {
    .nav-container {
        max-width: 1280px;
    }
}
@media (max-width: 1279px) {
    .nav-container {
        max-width: 800px;
        .nav {
            ul {
                a {
                    font-size: 15px;
                    margin: 0 18px 0 0;
                    letter-spacing: 7px;
                }
                p:hover {
                    border-bottom: 2px solid #49290B
                }
            }
            
        }
    }
}
@media (max-width: 799px) {
    .nav-container {
        max-width: 400px;
        .nav {
            ul {
                a {
                    font-size: 10px;
                    margin: 0 10px 0 0;
                    letter-spacing: 5px;
                }
                p:hover {
                    border-bottom: 1px solid #49290B
                }
            }
        }
    }
}

</style>