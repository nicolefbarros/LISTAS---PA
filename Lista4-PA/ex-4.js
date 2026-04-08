let input = require('readline-sync')
let num1 = input.questionInt("digite o primeiro numero: ")
let num2 = input.questionInt("digite o segundo numero: ")
let num3 = input.questionInt("digite o terceiro numero: ")
if (num1>num2>num3){
    console.log("O numero " + num1 + " é o maior!")
}
else if (num2>num1>num3){
    console.log("O numero " + num2 + " é o maior!")
}
else{
    console.log("O numero " + num3 + " é o maior!")
}