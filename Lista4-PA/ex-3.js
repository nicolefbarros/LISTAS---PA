let input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")

if (num1 > 10) {
    console.log("o numero " + num1 + " é maior que 10!")
}
else {
    console.log("o numero " + num1 + " é menor que 10!")
}