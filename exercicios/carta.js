/**
 * Sorteio de uma carta
 * Exemplo de uso de array para simplificar o código
 * @author Diego Cavalcanti
 */
 
const prompt = require(`prompt-sync`)()
//            [0]  [1]  [2]  [3]
let nipes = ["♠", "♥", "♦", "♣"]
//          [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10]  [11]  [12]  
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
 
do {
console.clear()
console.log("Sorteio de uma carta ♠ ♥ ♦ ♣" )
prompt("precione a tecla [ENTER] para sortear uma carta")

let nipe = nipes[Math.floor(Math.random() * 4)] // 0 1 2 3
let face = faces[Math.floor(Math.random() * 13)] // 0 1... 12

console.log(`${face}${nipe}`)

   novoJogo  = prompt("Deseja Jogar novamente(s/n) ? ")
} while(novoJogo === "s" || novoJogo === "s")

//console.log(`${faces[2]}${nipes[3]}`)
//console.log(`${faces[1]}${nipes[3]}`)