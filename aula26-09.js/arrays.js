const lista = ['João, Maria, Paulo, Pedro, Vitória, Augusto, Fabio, Larissa']
console.log(lista)

lista.push('Roberta') // Adiciona um valor no final da lista
console.log(lista)

lista.unshift('Bruno') // Adiciona um valor no início da lista
console.log(lista)

lista.pop() // Remove o ultimo nome da lista
console.log(lista)

lista.shift() // Remove o primeiro valor do array
console.log(lista)

console.log(lista.concat('Júlio')) // Adiciona uma nova lista com esse novo valor
console.log(lista)

console.log(lista.join(`-> `)) // ficaria assim: João-> Maria-> ...