/**
 * Regra de Três 
 * @author Diego Cavalcanti
 */

const prompt = require('prompt-sync')()

let x, y, valor

console.clear()
console.log("Calculadora regra de 3")

x = Number (prompt ("Digite o valor de x:"))
y = Number (prompt ("Digite o valor de  Y:"))

valor = (x * y) / 100

console.log(`Resultado ${valor}`)
