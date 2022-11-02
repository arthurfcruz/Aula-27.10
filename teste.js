var nomes = []
var ids = []
var precos = []
var avaliacao = []
var index = 0
var indexId = 0

var nomesSup = []
var idsSup = []
var precosSup = []
var avaliacaoSup = []
var indexSup = 0
var menorId = 0
var menorPreco = 0
var menorAvaliacao = 0

function cadastrarProduto(){ 
    ids[index] = parseInt(prompt("digite a ID do produto para cadastrar"))
    nomes[index] = prompt("digite o nome do produto para cadastrar")
    precos[index] = parseInt(prompt("digite o preço do produto para cadastrar"))
    avaliacao[index] = parseInt(prompt("digite a avaliacao do produto para cadastrar"))
    index++
} 

function buscarID(){
    var index = prompt("digite a id do produto para buscar no sistema")
    console.log(ids[index], nomes[index], precos[index], avaliacao[index])
}

function buscarNome(){
    var nome = prompt("digite o nome do produto para buscar no sistema")
    for (var index = 0; index < nomes.length; index++) {
        if (nome == nomes[index]) {
            console.log("o produto com o nome", nomes[index], "tem a id", ids[index])
        }
    }
}

function ordemID() {
    for (var index = 0; index < ids.length; index++) {
        menorId = ids[index]
    
      for (var index2 = 0; index2 < ids.length; index2++) {
           if (ids[index2] < menorId) {
                menorId = ids[index2]
            }
        }
    
      for (var index3 = 0; index3 < ids.length; index3++) {
            if (menorId == ids[index3]) {
                idsSup [indexSup] = ids[index3]
                nomesSup [indexSup] = nomes[index3]
                precosSup [indexSup] = precos[index3]
                avaliacaoSup [indexSup] = avaliacao[index3]
                ids[index3] = 1000000000000
                indexSup++
            }
        }
    }
 ids = idsSup
 nomes = nomesSup
 precos = precosSup
 avaliacao = avaliacaoSup
 indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacao[contador])    
    }
}

function ordemPreco() {
    for (var index = 0; index < nomes.length; index++) {
        menorPreco = precos[index]
    
      for (var index2 = 0; index2 < nomes.length; index2++) {
           if (precos[index2] < menorPreco) {
                menorPreco = precos[index2]
            }
        }
    
      for (var index3 = 0; index3 < nomes.length; index3++) {
            if (menorPreco == precos[index3]) {
                idsSup [indexSup] = ids[index3]
                nomesSup [indexSup] = nomes[index3]
                precosSup [indexSup] = precos[index3]
                avaliacaoSup [indexSup] = avaliacao[index3]
                precos[index3] = 1000000000000
                indexSup++
            }
        }
    }
 ids = idsSup
 nomes = nomesSup
 precos = precosSup
 avaliacao = avaliacaoSup
 indexSup = 0

    for (var contador = 0; contador < nomes.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacao[contador])    
    }
}

function ordemAvaliacao() {
    for (var index = 0; index < nomes.length; index++) {
        menorAvaliacao = avaliacao[index]
      
        var contador1 = 0
      
        for (var index2 = 0; index2 < nomes.length; index2++) {
           if (avaliacao[index2] < menorAvaliacao) {
                menorAvaliacao = avaliacao[index2]
            }
        }
    
      for (var index3 = 0; index3 < nomes.length; index3++) {
            if (menorAvaliacao == avaliacao[index3] && contador1 == 0 ) {
                idsSup [indexSup] = ids[index3]
                nomesSup [indexSup] = nomes[index3]
                precosSup [indexSup] = precos[index3]
                avaliacaoSup [indexSup] = avaliacao[index3]
                avaliacao[index3] = 1000000000000
                indexSup++
                contador1++
            }
        }
    }
 ids = idsSup
 nomes = nomesSup
 precos = precosSup
 avaliacao = avaliacaoSup
 indexSup = 0

    for (var contador = 0; contador < nomes.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacao[contador])    
    }
}