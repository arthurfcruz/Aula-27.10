var nomes = []
var ids = []
var precos = []
var avaliacao = []
index = 0

function cadastrarProduto(){ 
    ids[index] = prompt("digite a ID do produto para cadastrar")
    nomes[index] = prompt("digite o nome do produto para cadastrar")
    precos[index] = prompt("digite o preço do produto para cadastrar")
    avaliacao[index] = prompt("digite a avaliacao do produto para cadastrar")
    index++
} 

function buscarID(){
    var index1 = prompt("digite a id do produto para buscar no sistema")
    console.log(ids[index1], nomes[index1], precos[index1], avaliacao[index1])
}

function buscarNome(){
    var nome = prompt("digite o nome do produto para buscar no sistema")
    for (var index2 = 0; index2 < nomes.length; index2++) {
       if (nome == nomes[index2]) {
        console.log("o produto com o nome", nomes[index2], "tem a id", ids[index2])
       }
    }
}
