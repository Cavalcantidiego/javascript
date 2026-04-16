/**
 * Desafio do alcool ou gasolina 
 * @author Diego Cavalcanti
 */

//Probelma desenvolver em js console um app que informe o que é mais vantagem abastecer no veiculo flex (gasolina ou etanol) em função do preço do litro, sabendo que segundo as montadoras e mais vantagem abastecer com etanol se o litro do etanol custa 70% do valor do litro da gasolina / 

//variaveis - etanol, gasolina (number)

//entrada - etanol, gasolina 

//processamento + saida - se (etanol custar até 70% do valor da gasolina ) 
    //  abastecer com etanol
//senao
    // abastecer com gasolina 

//importaçaõ de pacotes 
const color = require('colors')
const prompt = require ('prompt-sync')()

//variaveis 
let etanol, gasolina

console.clear()
console.log("Calculo de Etanol ou Gasolina")

//entrada
etanol = Number(prompt("Digite o valor do litro do Etanol: "))
gasolina = Number(prompt ("Digite o valor do litro da gasolina: "))

//procesamento
//saida
// uso da estrutura if else 
if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com etanol".green)
} else {
    console.log("Abasteça com gasolina".cyan)
}