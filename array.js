
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