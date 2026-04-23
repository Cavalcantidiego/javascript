/**
 * CALCULO DO IMC
 * Exemplo de encadeamento da estrutura 
 * @author Diego Cavalcanti
 */

//importaçaõ de pacotes 
const prompt = require("prompt-sync")()

//variaveis 
let peso, altura, imc 

//entrada
console.clear()
console.log("-----------Cálculo do IMC-----------")

//procesamento
peso = Number(prompt("Digite o seu peso em Kg: "))
altura = Number(prompt("Digite a sua altura em metros"))

//saida
imc = peso /(altura * altura)


if (imc < 18.5) {
     console.log('Você está abaixo do peso.')
} else if ( imc < 24.9) {
    console.log('Você está com peso normal.')
} else if (imc < 29.9) {
    console.log('Você está levemente acima do peso.')
} else if (imc < 34.9) {
    console.log('Obesidade grau I.')
} else if (imc < 39.9) {
    console.log('Obesidade grau II (Severa).')
} else {
    console.log('Obesidade grau III (Mórbida).')
}

console.log(`IMC: ${imc.toFixed(2)}`)