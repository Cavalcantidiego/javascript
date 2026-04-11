/**
 * Estudo das variáveis @author Diego Cavalcanti
 */


console.clear() //limpo a tela
console.log("Estudo das variáveis") //escrevo um texto simples 
console.log("") //pulo linha
console.log("Vaviável do tipo String") //só um texto (guarda texto caractres )
let nome = "Diego Cavalcanti" // cria uma variável 
console.log(nome)
console.log(typeof(nome)) // mostra o tipo de variável  
console.log("")
console.log("Variável do tipo Number")
let idade = 25 
console.log(idade)
console.log(typeof(idade))

let peso = 73
console.log(peso)
console.log(typeof(peso))  

let altura = 1.85
console.log(altura)
console.log(typeof(altura)) 

console.log("")

console.log("Variável do tipo Booleam")
let vip = true
console.log(vip)
console.log(typeof(vip)) 

console.log("")
console.log("------------------------------------------------")
console.log("-               Ficha do Aluno                 -")
console.log("------------------------------------------------")
// A linha abaixo concatena (uniâo) um texto com o
//conteudo da variavel
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade} anos`)
console.log(`Peso: ${peso} Kg`)
console.log(`Altura: ${altura}`)
console.log(`VIP : ${vip}`)
console.log(`FCM: ${208 - (0.7 * idade)} bpm`)
// .toFixed(2) formata o resultado em 2 casas descimais 
console.log(`IMC: ${(peso / (altura * altura)).toFixed(2)}`)
console.log("-----------------------------------------------")