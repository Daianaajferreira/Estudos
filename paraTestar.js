let dia = "sexta-feira";

function fimDeSemana(dia){
switch(dia){
    case "sexta-feira":
        console.log ("Bom fim de semana!");
        break;
    case "segunda-feira":
        console.log ("Boa Semana!");
        break;
    default:
        console.log ("Bom dia!");
}
}
fimDeSemana(dia)
// Exercicio Papagaio

/*function papagaio(){
    for(let i=1; i<=5; i++){
    console.log("Viaduu");
    }
}
papagaio()*/

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(numeros,index){
    return numeros > 18
})
console.log(maiores)




/*let listaNumerosFiltrados = listaNumeros.filter(function(valor,index){
    return valor > 6;
})
console.log(listaNumerosFiltrados)*/

let data = new Date()
console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.getDate());