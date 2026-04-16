/**
 * Estudo da estrutura de controle if else
 * Cálculo da média 
 * @author Diego Cavalcanti
 */

//importaçaõ de pacotes 
const color = require('colors')
const prompt = require ('prompt-sync')()

//variaveis 
let nota1, nota2, media

console.clear()
console.log("Calculo de média")

//entrada
nota1 = Number(prompt("Digite a nota1: "))
nota2 = Number(prompt ("Digite a nota 2: "))

//procesamento
media = (nota1 + nota2) / 2

//saida
console.log(`Média: ${media.toFixed(1)}`)

// uso da estrutura if else para verificar se o aluno está aprovado ou reprovado 
if (media <5) {
    console.log("REPROVADO".red)
} else {
    console.log("APROVADO".cyan)
}