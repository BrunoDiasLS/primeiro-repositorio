/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * Parâmetros
 * São valores que passamos para as funções, para que elas utilizem esses valores dentro delas.
 */

// Passar o valor como parâmetro para mostrá-lo dentro do alert.
function cumprimentar(mensagem, repetir){
for (let i = 1; i <= repetir; i++) {
    alert(mensagem)
}   
}

function soma(num, num2){
    /**
     * O return serve pra enviar o resultado da execução daquela função
     */
    return num + num2
}

let resultado = soma(4, 7)
console.log(`O valor da variável resultado é ${resultado}`)




function maiorValor(a, b) {
    if(a > b){
        return a
    } else {
        return b
    }
}



const num1 = parseInt(prompt('Informe o primeiro número'))
const num2 = parseInt(prompt('Digite o segundo número'))

alert(`O maior número entre esses é ${maiorValor(num1, num2)}`)

/*cumprimentar('Olá, mundo', 3)
cumprimentar('Eu gosto muito do Javascript')
cumprimentar('Javascript sola o C#')*/

/*

OUTRO EXEMPLO
function cumprimentar(mensagem, repetir) {
    for (let i = 1; i <= repetir; i++) {
        alert(mensagem.toUpperCase())
    }
}

var frase = prompt("digite a frase")
var quant = prompt("quantas vezes")
cumprimentar(frase, quant)
*/