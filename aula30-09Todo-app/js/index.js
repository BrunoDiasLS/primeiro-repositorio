/**
 * Métodos de recuperação de elementos HTML
 *
 */

// Recupera elementos HTML a partir do nome
const todoForm = document.getElementById('todo-form')
const todos = []
let importante
let medio
let facil
let selectedSize


todoForm.addEventListener('submit', function (evento) {
    importante = document.querySelectorAll(".importante")
    medio = document.querySelector(".medio")
    facil = document.querySelector(".facil")








    evento.preventDefault()
    evento.stopPropagation()
    /**
     * querySelector recupera o primeiro elemento que atenda
     * a um seletor css informado
     */
    const todoInput = document.querySelector('#todo')
    /**
     * a propriedade value é uma propriedade que representa o atributo value
     * dos elementos de formulário do HTML, para acessarmos o valor que está dentro
     */
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()

})

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list')

    todosListSection.innerHTML = ''

    for (let tarefa of todos) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')

        pTodoText.innerText = tarefa




        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        /**
         * arow functions SEMPRE são anonimas
         */
        btnDelete.addEventListener('click', () => {
            /**
             * indexOF informa em qual posição se encontra um determinado valor dentro do seu array
             * se ele não achar o valor dentro do array ele retorna -1
             */
            const index = todos.indexOf(tarefa)
            /**
             * splice serve pra excluir um determinado valor do seu array a partir do seu índice
             */
            todos.splice(index, 1)
            renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'


        let icone
        if (importante.checked) {
            selectedSize = importante.value
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeVermelho')
            icone.innerText = 'circle'

        } else if (medio.checked) {
            selectedSize = medio.value
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeAmarelo')
            icone.innerText = 'circle'
        } else {
            selectedSize = facil.value
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeVerde')
            icone.innerText = 'circle'
        }


        /**
         * appendChild serve pra colocar novos elementos HTML dentro de outro
         */

        btnDelete.appendChild(spanIcon)
        /**
        * append serve pra colocar um ou mais elementos HTML dentro de outro
        */
        divCardBody.append(pTodoText, icone, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)


    }
}