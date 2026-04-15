/**
 * Calculadora do consumo de combustivel
 * @author Diego Cavalcanti
 */

const prompt = require ('prompt-sync')()

let distancia, litros, consumo

console.clear()
console.log ("Calculadora de combustivel")

distancia = Number (prompt("Digite a distancia em KM: "))
litros = Number (prompt("Digite a quantidade de combustivel"))

console.log(`Consumo de `)