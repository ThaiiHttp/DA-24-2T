// Exercicios de fixação

/*let valor = 0 // criando uma variavel chamada  valor, valendo 0.
for(let i=0; i<5; i++){ // um laço simplificado que nos passa inicialmente o valor de i sendo o, depois nos da uma condição que ira se repetir enquanto o i for menor que 5, depois adicionando sempre mais um a cada impressao do valor de i.
    valor += i // a variavel valor se tornará o valor final de i, que sera menor que cinco.
}
console.log (valor) //imprime o resultado da variavel valor.



const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] //criando uma lista de array .
for (let numero of lista){ //criando um laço com a variavel numero que nos passara a posiçao do meu array chamado de lista (of lista).
    if(numero > 18){ //comando que nos diz que a variavel numero sera os numeros que forem maior que 18.
        console.log(numero) //comando que imprimirá os valores da variavel numero.
    }
}
//a) será impresso no console os numeros que sao maiores que 18.
//b)poderia ser usado o for of para acessar o indice de cada elemento da lista, bastava definir o if (fora do for, fora das chaves) de maneira que a variavel nao seja declarado somente se maior que 18.

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas")) //criando uma variavel chamada quantidade total, dentro dela passamos um prompt em formato number que nos faz a pergunta descrita.
let quantidadeAtual = 0 //criando uma variavel que determina que inicialmente a quantidade atual tem o valor de 0.
while(quantidadeAtual < quantidadeTotal){ //enquanto a variavel "quantidade atual" for menor que a "quantidade total"
    let linha = "" // e variavel linha sera o valor de quantidade atual, enquanto ela for menor que a quantidade total, como codificado acima.
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){ //dentro de "for" codificamos inicialmente uma variavel chamada asteriscos com o valor inicial de 0, asteriscos será de menor valor doq quantidade atual somando com mais um, e por fim como incremento o asteriscos recebera o seu valor mais um.
        linha += "*" //o valor de linha, que cogitamos la no inicio, será o valor de asteriscos
    }
    console.log(linha) // imprime o valor de linha 
    quantidadeAtual ++ //
}


/*const quantidadeBichinhos = Number(prompt("Quantos bichinhos voce tem?"))
const resposta = quantidadeBichinhos
if(resposta === 0){
    console.log("Ah que pena! Voce pode adotar um pet.")
}*/


const arrayOriginal = [1, 3, 5, 7, 9]
console.log(arrayOriginal.lenght)
for(numero of arrayOriginal){
    console.log(numero)
    numero = (numero % 10)
}
         

    