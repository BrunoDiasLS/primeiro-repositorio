const litros = parseFloat(prompt('Quantos litros deseja abastecer?'))
const mensagem = 
`Escolha qual tipo de combustível:
 Digite A para Álcool
 Digite G para Gasolina
`
const tipoDeCombustivel = prompt(mensagem)

if (tipoDeCombustivel == 'A' == litros <= 25) {
    const valorFinal = litros * 1.9 * 0.98
    alert(`Total a ser pago é ${valorFinal.toFixed(2)} reais`)  
} else if (tipoDeCombustivel == 'A' == litros > 25) {
    const valorFinal = litros * 1.9 * 0.96
    alert(`Total a ser pago é ${valorFinal.toFixed(2)} reais`)
} else if (tipoDeCombustivel == 'B' == litros <= 25) {
    const valorFinal = litros * 2.7 * 0.97
    alert(`Total a ser pago é ${valorFinal.toFixed(2)} reais`)
}else if (tipoDeCombustivel == 'B' == litros > 25) {
    const valorFinal = litros * 1.9 * 0.95
    alert(`Total a ser pago é ${valorFinal.toFixed(2)} reais`)
}



