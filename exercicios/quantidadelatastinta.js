/**
 * Calculadora de calculos de tintas
 * @author Diego Cavalcanti
 */

const prompt = require ('prompt-sync')()

let areaParede, rendimentoLata, latasusadas 

console.clear()
areaParede = Number (prompt("Digite o tamnho da parede em m²:"))
rendimentoLata = Number (prompt("Digite o rendimento da lata em m²"))

latasusadas = (areaParede) / (rendimentoLata)
console.log(`Qauntidade de latas usadas é: ${latasusadas.toFixed(1)}`)