/**
 * Validação da Obrigatoriedade de votar
 * @author Diego Cavalcanti
 */

//importação de pacote 
const prompt = require('prompt-sync')()

//variaveis
let idade

//ux
console.clear()
console.log("Validação da obrigatoriewdade de votar")

//entrada 
idade = Number (prompt("Digite a sua idade: "))

//processamento e saida
if (idade < 16) {
    console.log("Proihbido votar")
} else if (idade === 16 || idade === 17 || idade > 70 ) {
    console.log("Voto facultativo")  
} else {
    console.log("Obrigatório Votar")
}