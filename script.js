// Carne - 400 gr por pessoa + de 6h 650g
// Cerveja - 2000 ml por pessoa + de 6h  3000 ml
// Refrigerante/Suco - 3000 ml por pessoa + de 6h 5000 ml
// Crianças valem por 0,5.





let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalcerveja = cervejaPP(duracao) * adultos;
    let qdtTotalRefrigerantes = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalcerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerantes / 2000)} Litros de Refrigerantes e Sucos</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }else {
        return 400;
    }
  
}
    function cervejaPP(duracao) {
        if (duracao >= 6) {
            return 3000;
        }else {
            return 2000;
        }

    }

        function refrigerantePP(duracao) {
            if (duracao >= 6) {
                return 1300;
            }else {
                return 600;
            }
}