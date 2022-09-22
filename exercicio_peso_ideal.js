const altura = parseFloat(prompt(`Qual a sua altura?`))
const genero = prompt(`Se for mulher digite F e se for homem digite H.`)

if (genero == 'F') {
    const pesoIdeal = (62.1 * altura) - 44.7
    alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)}`)
} else if (genero == 'H') {
    const pesoIdeal = (72.7 * altura) - 58
    alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)}`)
}
