const nivel = [
    ["Ferro", { min: 0, max: 1000 } ],
    [  "Bronze", { min: 1001, max: 2000 } ],
    [  "Prata", { min: 2001, max: 5000 } ],
    [  "Ouro", { min: 6001, max: 7000} ],
    [  "Platina", { min: 7001, max: 8000 } ],
    [ "Ascendente", { min: 8001, max: 9000  }],
    [ "Immortal", { min: 9001, max: 10000 } ],
    [  "Radiante", { min: 10001, max: Infinity}]
];


// Exemplo: Para verificar em qual nível uma pessoa com 2500 de experiência está
const experienciaDoHeroi = 10002;
const nome = "Cláudio"
let validacao = false


for (let i = 0; i < nivel.length; i++) {
    if(experienciaDoHeroi >= nivel[i][1].min && experienciaDoHeroi <= nivel[i][1].max ){
    nivelDoHeroi = nivel[i][0]
    validacao = true
    break;
    
}


}


if(validacao){
    console.log(`O herói de nome ${nome} está no nível de ${nivelDoHeroi}`)
}else{
    console.log('experiência ou nome invalida!')
}


