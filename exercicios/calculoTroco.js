/**
 * Calculo de Troco 
 * @author Diego Cavalcanti
 */

const prompt = require('prompt-sync')()

let compra, valorCompra, Troco

console.clear ()

compra = Number(prompt(" Digite valor da compra: "))
valorCompra = Number(prompt(" Digite valor pago pelo cliente: "))

Troco = valorCompra - compra

console.log (prompt (`Troco: ${Troco}`)) 
