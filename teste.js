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
