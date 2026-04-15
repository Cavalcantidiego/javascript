/**
 * Calculo da a´rea de um terreno
 * @author Diego Cavalcanti
 */

const prompt = require('prompt-sync')()

let comprimento, largura, area

console.clear()
console.log("Calculadora da área de terreno")

comprimento = Number(prompt(" Digite o comprimento do terrno em m: "))
largura = Number(prompt("Digite a largura do terrno em m: "))

area = comprimento * largura

console.log(`A área do Terreno é de: ${area} m²`)