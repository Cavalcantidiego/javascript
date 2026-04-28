/**
 * Jodo do dado 
 * Exemplo de uso da estrutura do while 
 * @author Diego Cavalcanti
 */

const prompt = require("prompt-sync")()
let novoJogo = "n"

do {
    console.clear()
    console.log("Jogo do Dado")
    prompt ("Precione enter para lançar o dado...")
    console.log(`Face do dado: ${Math.ceil(Math.random()* 6)}`)
    novoJogo = prompt("Deseja Jogar novamente(s/n) ? ")
} while(novoJogo === "s")