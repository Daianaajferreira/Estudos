//um objeto criado
let pessoa ={
    nome: "Daiana",
    idade: 32,
    altura: 1.68,
}
///metodo JSON.stringfy pega o objeto e mostra no string
let json = JSON.stringify(pessoa)
console.log(json)

// metodo JSON.parse, visualisa o objeto como objeto mesmo
let objetoDeNovo = JSON.parse(json)
console.log(objetoDeNovo)