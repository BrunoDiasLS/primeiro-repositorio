// Arrays ou vetores é um tipo especial que te permite armazenar diversos valores em apenas um local

// Criando um array

// let arr = new Array()
// let arr2 = new Array(5)

// forma mais usada [] significa array formula igual a da primeira
// cada valor de um array é separado por vírgula
/* Posições de um array
  -> Cada posição é representado por um numero
   A primeira posição é a posição 0
*/

let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Ola mundo', true, false, false] 
console.log(arr[6]) // o valor ex 4 entre[] pega a posição olá mundo que seria a quarta posição
arr[6] = 'outro texto'
console.log(arr[6])
arr[8] = 'Agora a posição 8 existe dentro do arr'
console.log(arr)