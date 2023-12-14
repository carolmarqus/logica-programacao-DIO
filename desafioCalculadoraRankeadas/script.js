

let saldoVitorias = saldoRankeadas(62,10);

let nivel = "";
if (saldoVitorias <= 10){
    nivel = "Ferro";
} else if(saldoVitorias >=11 && saldoVitorias <= 20){
    nivel = "Bronze";
} else if(saldoVitorias >=21 && saldoVitorias <= 50){
    nivel = "Prata";
} else if(saldoVitorias >=51 && saldoVitorias <= 80){
    nivel = "Ouro";
} else if(saldoVitorias >=81 && saldoVitorias <= 90){
    nivel = "Diamante";
} else if(saldoVitorias >=91 && saldoVitorias <= 100){
    nivel = "Lendario";
} else{
    nivel = "Imortal";
}

console.log(`O Heroi tem saldo de ${saldoVitorias} está no nivel de ${nivel}`)

function saldoRankeadas(vitorias,derrotas){
    let resultado = vitorias - derrotas;
    return resultado;
}


