//delimitação e strings (texto)

const aspasSimples = 'Olá mundo'
console.log(aspasSimples)

//caracteres de escape \n quebra de linha

const aspasDuplas = "Olá, eu sou o \nJavascript. Eu sou melhor que \nPython"
//console.log(aspasDuplas)

const textoComCrase = `Olá, eu sou o Javascript. Eu sou melhor que Python` //com as crases poe quebrar linha direto 
//console.log(textoComCrase)

// Métodos das strings

const texto = 'O Javascript foi criado alguns anos após o Pytho. No entanto o Javascript é bem mais bacana.'

console.log(texto)
console.log(texto.toUpperCase())//letra maiúscula todo texto
console.log(texto.toLocaleLowerCase()) //letra minúcula
console.log(texto.concat(" A linguagem C é a mãe e toda a linguagens")) //outra forma de concatenar
console.log(texto[2]) // pegar um caracter no meio da frase
console.log(texto.substring(2, 49))// corta o texto one quero que inicie e onde quero que termine
console.log(texto.replace('Javascript', 'Rust')) // Troca uma palavra pela outra
//console.log(texto.replaceALL('Javascript', 'Kotlin')) // Troca todas a palavras 
console.log(texto.replace(/Javascript/g, 'PHP')) //Troca todas a palavras também
console.log(texto.replace(/Javascript/gi, 'PHP'))//ignora maiusculas e minusculas

const html = '<DOCTYPE html>\n<html><html>'

console.log(html.startsWith('<DOCTYPE html>')) //true // busca arquivo nesse caso html
console.log(html.endsWith('</body>')) // false

const mensagem = "                                             Olá mundo                        "
console.log(mensagem)
console.log(mensagem.trim()) //retira o espaços em branco

let senha = 'sonic'

console.log(senha.length) //Quantos numeros tem a variavel
console.log(senha.length >= 8)
