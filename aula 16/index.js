function imprimirOlaMundo(){
    console.log("Ola mundo!")
}
imprimirOlaMundo()

function calculaArea (altura, largura){
    const area = altura*largura
    return area
}
const areaCalculada = calculaArea(2,3)
console.log(calculaArea(2,3))



const calculaArea1 = function(altura, largura){
    const area = altura * largura
    return area
}
const areaCalculada2 = calculaArea1(2, 3)

console.log(areaCalculada2)


const calculaArea2 = (altura, largura) =>{
    const area = altura * largura
    return area
   
}
const areaCalculada3 = calculaArea2(2,3)   
console.log(calculaArea2)



function minhaFuncao(variavel){
    return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//nao será impresso nada no console pois a função nao foi invocada.
//se tirarmos o console log e apenas invocassemos a função ela igualmente nao seria impressa.



/*let textoUsuario = prompt("Insira um texto:")
const outraFuncao = function(texto){
return texto.toLowerCase().includes("Cenoura")
}
const resposta = outraFuncao(textoUsuario)
console.log(resposta)
//essa função pede ao usuario para inserir um texto 

function sobreEu(){
    console.log("Eu sou a Thai, tenho 22 anos, moro em sao leopoldo e sou estudante")
}
sobreEu()*/



function somarNumeros (num1,num2){
    const resultado = num1 + num2
    console.log("A soma é:", resultado)
}
somarNumeros(15,15)


function maiorOuIgual (n1,n2){
    return n1>=n2;
}
console.log(maiorOuIgual(10,12))


function ePar(numero){
    return numero % 2===0
}
console.log(ePar(70))


function mensagem(mensagem){
    const tamanho = mensagem.length;
    const maiusculo = mensagem.toUpperCase()
    console.log("O tamanho da mensagem é:", tamanho)
    console.log("A mensagem em maiusculo:", maiusculo)
}
mensagem("A aventura vai começar")

