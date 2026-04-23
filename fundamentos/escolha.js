/**
 * Exemplo de uso da estrutura do switch case
 * @author Diego Cavalcanti
 */

const prompt = require("prompt-sync")()

let opcao

console.clear()
console.log("Menu de opções: ")
console.log
console.log("1. Cadastro de clientes")
console.log("2. Cadastro de Produtos")
console.log("3. Relatórios")
opcao = Number(prompt("Digite a opção desejada: "))

//Uso da estrutura switch case para tratamento do valor digitado
//OBS: Esta estrutura aceita variáveis numéricas do tipo números inteiros 
// e caracteres únicos, dentro da estrutura o default é opcional

switch (opcao) {
    case 1: 
        console.log("Tela de cadastro de clientes")
        break
    case 2: 
        console.log("Tela de cadastro de Produtos")
        break
    case 3: 
        console.log("Impressão de relatórios")
        break
    default: 
        console.log("opção invalida")
        break
}