/**
 * Desafio JokenPo
 * @author Diego Cavalcanti
 */

//importação de pacotes
const prompt = require('prompt-sync')()

//variaveis
let jogador, computador 

//ux
console.clear()                                           
console.log("    __     _____         _____   ")
console.log(" __|  |___|  |  |___ ___|  _  |___ ")
console.log("|  |  | . |    -| -_|   |   __| . |")
console.log("|_____|___|__|__|___|_|_|__|  |___|")
console.log("")

//Logica do jogador 
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
jogador = Number(prompt("Digite a opção desejada: "))
console.log("")
switch(jogador) {
    case 1:
        console.log("Jogador escolheu pedra")
        break
    case 2:
        console.log("Jogador escolheu papel")
        break
    case 3:
        console.log("Jogador escolheu tesoura")
        break
    default:
        console.log("Opção invalida")
        break
}

//logica do computador
computador = Math.ceil(Math.random() * 3) // 1, 2, 3
switch(computador) {
    case 1:
        console.log("Computador escolheu pedra")
        break
    case 2:
        console.log("Computador escolheu papel")
        break
    case 3:
        console.log("Computador escolheu tesoura")
        break
}

//Logica para determinar o vencedor ou declarar empate
if (jogador === computador) {
    console.log("EMPATE")
} else if ((jogador === 1 && computador === 3)|| (jogador === 2 && computador === 1) || (jogador === 3 && computador === 2)) {
    console.log("Jogador Venceu")
} else {
    console.log("computdor Venceu")
}