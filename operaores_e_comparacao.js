//OPERADORES DE COMPARAÇÃO

//verdaediro (true) ou Falso (false)

// igualdade
const msg = 'Eu sou uma mensagem' // sinal e igual nesse caso é atribuição e valor
const msg2 = 'Eu sou outra mensagem'

console.log(msg == msg2) //false

const num = 5
const num2 = 5

console.log(num == num2) //true //sinal e igual duplo é comparação

let a = 78
let b = '78' // ambos são numeros só mua a leitura string e number

console.log(typeof a)
console.log(typeof b)
console.log(a == b) //true

//iênticos
console.log(a === b) //tres sinai de igual significa se são identicos

let c = 5 //number
c = 'Olá mundo' //string

//diferença

console.log(msg != msg2) // (!= sinal de diferente)
console.log(a != b)
console.log(a !== b)

// comparação

a = 56
b = 30
let e = 500
let d = 500

console.log(a > b) //true
console.log(e >= d) //true maior ou igual 
console.log(3 > 6) //false

console.log(3 < 7.5) //false
console.log( 7.5 > 7.5) //false
console.log(8 <= 8) //true

