//Operadores lógicos 

// Operador E
// V - veradeiro
// F - falso
// V V - V
// F V - F
// V F - F
// F F - F

// meia precisa ser maior ou igual a 7 e preciso ter no mínimo 80% e presença 
const media = (3.5 + 6 + 10) / 3
const presenca = 0.7

console.log(media >= 7 && presenca >= 0.8) // false

// Operador OU ||
// V V - V
// F V - V
// V F - V
// F F - F

console.log(4 > 7 || 3 < 2) // fase
console.log(5 > 3.5 || 7 > 8)// true

const estado = 'CE'

console.log(estado == 'SP' || estado == 'MG')

// Operador NOT ! negação interrogação 
// NOT V - F
// NOT F - V

const resultado = 5 < 3

console.log(!resultado)

