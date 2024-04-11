<template>
    <div class="footer-container">
        <p> </p>
        <a class="logo-footer" href="/"><img src="https://hackathon-kud9.onrender.com/assets/img/icone/logocream.png"></a>
    </div>
    

</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-color: #49290B;
}
.footer-container {
    max-width: 1920px;
    display: flex;
    flex-wrap: wrap;
    margin: 80px auto auto auto ;
    p {
        width: 90%;
        margin: auto;
        border: 2px solid #FFD39F;
        margin-top: 20px;
    }
    .logo-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
            width: 15%;
            margin: 30px 0 30px ;
        }
    }
}
@media (max-width: 1919px) {
    .footer-container {
        margin: 60px auto auto auto ;
    }
}
@media (max-width: 1279px) {
    .footer-container {
        margin: 40px auto auto auto ;
    }
}
@media (max-width: 799px) {
    .footer-container {
        margin: 20px auto auto auto ;
        p {
            border: 1px solid #FFD39F;

        }
    }
}


</style>