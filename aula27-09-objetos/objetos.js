/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
*/

let end = {
    rua: 'Rua Nilo',
    numero: 456,
    estado: 'RJ',
    complemento: ' Sem compelmento',
    cep: '24360-260'
}

let pessoa = {
    nome: 'Joana', 
    idade: 23,
    cpf: '000.000.000-00',
    altura: 156,
    enderco: {...end}, 
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        // Quando eu desejo referenciar o objeto dentro dele mesmo utilizo a palavra 'this'.
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}
// console.log(end)
// console.log(pessoa.enderco.numero)
// pessoa.cumprimentar()
// pessoa.nome = 'Pablo Escobar' // Troca o valor do objeto
// pessoa.cumprimentar()
// pessoa.habilidades.push('Angular') // Adiciona na lista
// console.log(pessoa.habilidades)
// console.log(pessoa['cpf']) // retorna o valor expecífico

console.log(end.rua)
console.log(pessoa.enderco.rua)

pessoa.enderco. rua = 'Rua Secundária'
console.log(pessoa.enderco.rua)
console.log(end.rua)

