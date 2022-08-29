let nome
let idade 
console.log("Tipo da variavel nome:", typeof nome)
console.log("Tipo da variavel idade:", typeof idade) 
/*foi impresso o tipo UNDEFINED porque nenhum valor foi atribuido as respectivas variaveis*/ 

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual a sua idade?")
console.log("Tipo da variavel nome:", typeof nome)
console.log("Tipo da variavel idade:", typeof idade) 
/* após a atribuição de valores, as duas varáveis tem tipo String*/

console.log("Olá", nome,  "você tem", idade, "anos")



