let input = require('readline-sync')
let num1 = input.questionInt("digite o primeiro numero: ")
let num2 = input.questionInt("digite o segundo numero: ")
if (num1 > num2) {
    console.log(num2 + "," + num1)
}
else {
    console.log(num1 + "," + num2)
}