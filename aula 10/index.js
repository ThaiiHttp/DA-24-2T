let condição1 = true// açao se a condição for verdadeira
if (condição1) {
    console.log("Entrou no if 1")
}

let condição2 = false// açao se a condiçao for falsa
if (condição2) {
    console.log("Entrou no if 2")
}



/*const num1 = Number(prompt("Digite o numero 1"))
const num2 = Number(prompt("Digite o numero 2"))

const comparacao = num1 === num2
if (comparacao) {
    console.log("Sucesso")
}*/


/*let condicao = false
if(condicao){
    console.log("Entrou no if 2")
}else{
    console.log("Entrou no else!")
}



const num3 = Number(prompt("Digite o numero 3"))
const num4 = Number(prompt("Digite o numero 4"))
num3===num4
if(num3===num4){
    console.log("OS numeros sao iguais")
}else{
    console.log("Os numeros sao diferentes")
}



/*const num1=Number(prompt("Digite o numero 1"))
const num2=Number(prompt("Digite o numero 2"))
num1===num2
if(num1===num2){console.log("Os numeros sao iguais")}
else if(num1>num2){console.log("O num1 é maior que o num2")}
else{console.log("O num1 é menor que o num2")}*/





/*let paisdDeOrigem = prompt("Digite seu pais de origem")

switch(paisdDeOrigem){
    case "Brasil" :
        console.log("brasileiro")
        break
    case "Inglaterra":
        console.log("Ingles")
        break
    default:
        console.log("Nao foi encontrado nenhuma nacionalidade")
}*/

/*let casas = prompt("Qual o nome da aluna?")

switch(casas){
    case "Hermione":
        console.log("Grifinoria")
break

case "Ana":
console.log("Lufa-Lufa")
break

case "Luna":
console.log("Corvinal")
break

case "Narcisa":
console.log ("Sonserina")


default: console.log("Nao foi encontrado nenhuma aluna")}*/


const ensino = prompt("Concluiu o ensino medio?").toLowerCase()==="sim"
const idade = Number(prompt("Digite sua idade"))>=18
const faculdade =(prompt("Voce faz faculdade?")).toLowerCase()==="sim"
if(ensino && idade &&!faculdade){
    console.log("Voce pode estudar nessa faculdade")
}else{
    console.log("Voce nao pode estudar nessa faculdade")
}





