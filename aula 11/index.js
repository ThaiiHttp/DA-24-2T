/*const respostaDoUsuario = prompt("Digite o numero que voce quer testar") //comando utilizado para perguntar ao usuario qual numero ele quer testar.
const numero = Number(respostaDoUsuario) // passando a resposta inserida pelo usuario para tipo number.

if(numero % 2 === 0){ // se o numero que o usuario colocou for divisivel por dois e o resto for igual a zero ele passa no teste.
console.log("passou no teste.")
}else{
    console.log("Nao passou no teste") // se o numero que o usuario colocou for divisivel por dois e diferente de 0 ele nao passará no teste.
    
}*/


/*let fruta = prompt("escolha uma fruta:") // codigo para definir valores a frutas e consulta-los
let preço 
switch (fruta){
    case "Laranja":
        preço = 3.5
        break;
    case "Maça":
        preço = 2.25
        break;
    case "uva":
        preço = 0.30
        break;
    case "Pera":
        preço= 5.50
        break;
    default:
        preço = 5
        break;
}

console.log("O preço da fruta", fruta, "é", "R$", preço)*/




const numero = Number(prompt("Digite o primeiro numero")) // solicitando ao usuario um numero.
if(numero > 0 ){
    console.log("Esse numero passou no teste.") // ao inserir o numero 10 será impresso a mensagem do console.log 
    let mensagem = ("Essa mensagem é secreta") // ao iserir o valor de -10 nao sera impresso nada, pois nao foi definido mensagem no console.log
}
console.log(mensagem) //havera um erro no console, pois o comando do console.log nao esta dentro das chaves. b  