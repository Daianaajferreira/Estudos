let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

//Metodo map para mapear o array

listaNumeros.map(function(valor,index){
    console.log(valor)
})
//map  - para dobrar os numeros dos arrays
let listaNumerosDobrados = listaNumeros.map(function(valor,index){
    return valor*2;
});
console.log(listaNumerosDobrados)

//Metodod Filter - para filtar alguma condição qe ficar no return

let listaNumerosFiltrados = listaNumeros.filter(function(valor,index){
    return valor > 6;
})
console.log(listaNumerosFiltrados)

//metodo reduce - reduzir o array para um unico valor, no caso somando os valores dos arrays
let listaNumerosSomados = listaNumeros.reduce(function(resultado,valor){
    return resultado + valor;     
});

console.log(listaNumerosSomados)

//Metodo forEach - um simples For
listaNumeros.forEach(function(valor,index){
    console.log("O Valor é: "+valor+" sua posição é: "+index )
})
