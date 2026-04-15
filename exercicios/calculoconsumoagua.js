/**
 * @author Diego Cavalcanti
 * Calculadora de consumo de agua diária 
 */

const prompt = require (`prompt-sync`)()

let peso, consumo

peso = Number(prompt("Digite seu peso: "))
console.log(peso)

consumo = (peso * 35) / 1000 
console.log(consumo)

console.log(`Para ${peso} Kg, o consumo diário recomendado é: ${consumo}`)
