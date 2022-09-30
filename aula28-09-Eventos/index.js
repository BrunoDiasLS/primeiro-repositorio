
let contador = 0
function mostrarAlerta() {
    // O document é um objeto que faz uma representação do HTML dentro do Javascript
    // getElementById serve ora recuperar um elemento HTML pelo seu id
    // A propriedade classList retorna um array com todas as classes CSS que um elemento possui
    // classList.add() serve para adicionar novas classes dentro de um elemento html
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
   
}
function clicar (){
    contador ++;
    conta.innerText = contador;
}

function fecharAlerta () {
    //classList.remove() remove uma classe dinamicamente de dentro de um elemento HTML
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar') 
    
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')
const conta =document.getElementsByTagName('p')[0]


// add.EventListener é um método que te permite ouvir eventos do HTML pelo Javascript

/** Se eu precisar passar uma função como parâmetro para outra eu passo a referência dela,
 * ou seja, a função sem os parâmetros.
 *
*/
btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)


