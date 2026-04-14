/**
 * @author Diego Cavalcanti
 * 
 * Calculo de Tijolos
 * 
 * Cálculo da quantidade de tijolos (tijolo maciço):
Desenvolva um programa que calcule a quantidade de tijolos necessários para construir uma parede. O usuário deve fornecer as dimensões da parede e como base o tijolo maciço(tijolo comum). O programa deve calcular e exibir o número de tijolos necessários.

Tamanho do tijolo comum: 20cm x 10cm (0.2m x 0.1m)

                                  2  
área do tijolo: 0.2 * 0.1 = 0.02 m

Total de tijolos = área da parede (metros quadrados) / área do tijolo

//variáveis
total, alturaParede, larguraParede

//Entrada
alturaParede, larguraParede

//Processamento
total = (alturaParede * larguraParede) / 0.02

//Saída
total
 */

const prompt = require('prompt-sync')()

let total, alturaParede, larguraParede 

console.clear()
console.log ("Calcuçadora de Tijolo Comum (20cm x 10cm)")

alturaParede = Number (prompt("Digite a altura da sua parede:"))
console.log(alturaParede)

larguraParede = Number (prompt("Digite a largura da sua parede:"))
console.log(larguraParede)

total = (alturaParede * larguraParede) / 0.02

console.log(`Total de tijolos: ${total}`)
