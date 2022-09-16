alert('Código Funcionando!') //mostrar uma msg pro usuário
const nomeUsuario = prompt('Olá usuário, qual seu nome?') // mostra msg e recebe um valor

let num = Number(prompt('Olá, ' + nomeUsuario + '. Digite algum número por favor!')) //5
//console.log(typeof num) // typeof retorna o tipo do valor que a variavel retorna

//operadores de incremento
//const sucessor = num++ //igual num + 1
//const antecessor = num - 1

//alert('O sucesor de ' + num + ' é ' + sucessor) 
//alert('O antecessor de ' + num + ' é ' + antecessor) 
console.log(num++) //5 //operador e pós-incremento
console.log(num) //6
console.log(++num) //7 // operador ed pré-incremento

//Operadores e decremento
console.log(num--)//7 // operaor e pós-decremento
console.log(num) //6
console.log(--num)//5 // operador e pre-decremento