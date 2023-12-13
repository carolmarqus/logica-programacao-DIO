let nome = "carol";
let experiencia = 6090;
let nivel = "";

    function calculaNivel() {
    if (experiencia <= 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 6000) {
        nivel = "Prata";
    } else if (experiencia >= 6001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(
        `O heroi ${nome}, tem ${experiencia} de experiencia e é nivel ${nivel}`
    );
    }

    calculaNivel();


