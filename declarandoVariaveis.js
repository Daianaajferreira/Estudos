// é possive alterar depois, limitação de escopo, só dentro da função dentros dos if da vida. ele só pode ser execultado dentro da função criada
let fruta1 = "Banana é mais ou menos"
//é possive alterar depois, escopo é global, não tem limitação de escopo
var fruta2 = "Abacaxi deveria comer mais"
//variavel const não pode ser alterada, fixa. Tem limitação de Escopo
const fruta3 = "Uva carinha a bixinha"

//Tipo das variaveis
var num1 = Infinity;

console.log(num1)
//Saber o tipo da Variavel
console.log(typeof num1)

//-----------------------------------------------------------
// Tipo dado String
var hello = "Hello"
var world = 'World'
//forma mais pratica de concatenar
var helloworld = `${hello} ${world}`
console.log(helloworld)
//---------------------------------------------------------------------------------
//Arrays
var alunos = ["Daiana", "Cassio", "João", "Felipe"]
//saber quantos itens tem analista
console.log(alunos)
console.log(alunos.length)
console.log(alunos[2])
console.log(alunos[alunos.length-1])
//metodo para fatiar o array, anda casas, retorna um array cortado
console.log(alunos.slice(0,3))

//------------------------------------------------------------------------------------
//Metodo push
alunos.push("Leila")
//ou
const novoComprimento = alunos.push("Leila Maria")
console.log(alunos)
console.log(alunos.length)

//Array de Array
//const arrayDeArray = ["Daiana","Dainiel"[]]

//Metodo Pop tira o ultimo elemento do array
alunos.pop
console.log(alunos)

// Shift remove o primeiro elemento
alunos.shift
console.log(alunos)

// pesquisae posição do array da esquerda para diretira
var posicao = alunos.indexOf("João")
console.log(posicao)

//pesquisar posição da direita para a esquerda
var posicao = alunos.lastIndexOf("João")
console.log(posicao)

//Mapear os elementos do array e imprimir
var alunos = ["Daiana", "Cassio", "João", "Felipe"]
//Mapear os elementos do array e imprimir

alunos.map((value, idx, array) => {
    console.log(`aluno na posição ${idx} é ${value}`)
})


//Metodo Find , buscar por algo no array, retornando o elemento
var alunos = ["Daiana", "Cassio", "João", "Felipe"]
//Mapear os elementos do array e imprimir
const resposta = alunos.find((value, index, obj) => {
    if (value === "Cassio"){
        return true
    } else {
        return false
    }
})
console.log(resposta)

//Metodo Find , buscar por algo no array, retornando a posição
var alunos = ["Daiana", "Cassio", "João", "Felipe"]
//Mapear os elementos do array e imprimir
const resposta = alunos.findIndex((value, index, obj) => {
    if (value === "Cassio"){
        return true
    } else {
        return false
    }
})
console.log(resposta)








