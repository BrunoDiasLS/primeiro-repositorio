const peso = parseFloat(prompt('Digite o seu peso.'))
const altura = parseFloat(prompt('Digite sua altura.'))
const IMC = peso / (altura ** 2)

if (IMC < 18.5) {
    alert('Você está abaico do peso!')
} else if (IMC >= 18.5 == IMC <= 25) {
    alert('Você está com o peso normal!')
} else if ( IMC >= 25 == IMC <= 30) {
    alert('Você está acima do peso!')
} if (IMC > 30 ) {
    alert('Você está obeso!')
}
    
