let input = require("readline-sync")
let numero1 = input.questionInt("Digite o primeiro numero: ")
let resposta1 = (numero1 - 3)
let numero2 = input.questionInt("Digite o segundo numero: ")
let resposta2 = (numero2 + 2)
let resposta3 = (resposta1 + resposta2) - 1
console.log("Resultado = " + resposta3)