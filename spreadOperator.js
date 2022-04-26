//operador de propafgação, junção array
let frutas = ["maça","banana", "uva"];
let frutasDois = ["laranja", "abacate","goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

//spread Operatos, para objetos

let pessoa = {
    nome:"Camilona",
    idade: 100
}

let pessoaCapivara = {
    tel:"975673655",
    rg: 466866124,
    ...pessoa
}

let pessoaCompleta ={
    endereço:"rua da paz",
    ...pessoaCapivara
}
console.log(pessoaCompleta)

// com funções
function letras(...paramns){
    console.log(paramns[1])
}
letras("a", "b","c");