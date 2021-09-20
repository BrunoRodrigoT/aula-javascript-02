//Questao - 1

let a = new Number(7)
let b = new Number(-55)
let c = new Number(389)
let d = new Number(1000)
let e = new Number(3.1459)
let f = new Number(-46.267)

console.log(a, b, c, d, e, f)
console.log("Somar a primeira variável com a última variável: ")
console.log(a + f)
console.log("Multiplicar a primeira variável com a terceira variável: ")
console.log(a * c)
console.log("Dividir a quarta variável pela quinta variável: ")
console.log(d / e)

//Questao - 2 

let num1 = new Number(10)
let num2 = new Number(3)
let num3 = new Number(9)
let num4 = new Number(99.9)
let num5 = new Number(721)

console.log(num1, num2, num3, num4, num5)

if(num1 < Number.MAX_VALUE){
    console.log(true)
}else{
    console.log(false)
}

if(num2 = NaN){
    console.log(true)
}else{
    console.log(false)
}

if(num5 <= num3){
    console.log(true)
}else{
    console.log(false)
}