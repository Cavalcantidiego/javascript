/**
 * Exercicio - Conversão de temperatura 
 * @author Diego Cavalcanti
 */

const prompt = require('prompt-sync')()

//variaveis
let c,f
console.clear()
console.log("Conversão de temperatura Fahrenheit para Celsius")

//entradas
f = Number(prompt("Digite a temperatura em Fahrenheit:" ))

//processamento
c = (f - 32) * 5/9 

//saida
console.log(`${f} °Fahrenheit equivalem a ${c.toFixed(1)}°Celcius`)
