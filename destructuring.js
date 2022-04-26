//Desturação de um objeto - extração de dados
let pessoa ={
    nome: "Daiana",
    amor: "mae",
}

const {nome, amor} = pessoa;

console.log(nome);

//Desturação de um arrays tbm - extração de dados
let listaComparas = ["pão","leite","açucar"];

const [item1, item2, item3] = listaComparas
console.log(item1)