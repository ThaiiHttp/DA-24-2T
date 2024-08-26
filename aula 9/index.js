/*let array // criando uma variavel tipo lista (array) que pode ter seu valor alterado (let), sem nome definido (undefined)
console.log('a. ', array) //imprimindo a variavel de tipo array com seu valor sendo 'a. '

array = null //criando uma variavel do tipo lista (array) com seu valor nulo
console.log('b.', array) //imprimindo a variavel de tipo array com seu valor igual a 'b.'

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // criando uma variavel tipo lista (array) do 3 ao 13
console.log('c. ', array.length) // imprimindo a variavel chamando de 'c. ' e contando os caracteres existentes = 11 

let i = 0 //criando uma variavel que pode ter seu valor alterado e nomeando como i e inicialmente dando seu valor como 0
console.log('d. ', array[i]) //imprimindo a variavel de tipo (array) nomeando seu valor como 'd. ' 

array[i+6] = 19 // definindo o valor de i como 0, definimos que i (=0) + o valor 6, quer seria o valor 9 será alterado para 19
console.log('e. ', array)

/*const valor = array [i+6]// criando uma nova variavel constante
console.log('f. ', valor)*/

/*const frase = prompt("Digite uma frase")//criando uma variavel com um comando de pergunta
console.log(frase.toUpperCase(.replaceAll("A",    "I"), frase.lenght)) // primeiramente pegando a frase escolhida toda em maiuscula, depois trocando todas as letras A por I.

"Subi num onibus em Marrocos"*/

/*const nome = prompt("Digite seu nome:")
const email = prompt("Digite seu email:")
console.log("O email "  +  email  +  " foi cadastrado com sucesso. Seja bem vindo(a)"  + nome ) // metodo de concatenação

const pessoa = prompt ("Digite seu nome:")
const numero = prompt ("Digite seu contato:")
console.log(`Seja bem-vindo ${pessoa} seu numero é: ${numero}`)// metodo template */

/*const food = ["Macarrao" , "Sushi" , "Strogonoff" , "Pizza" , "Arroz e feijão"]
console.log(food) //comando que mostra a lista definida no array a cima.

console.log("Essas são minhas comidas favoritas:", food)

const usuario = prompt("Qual a sua comida favorita?")
usuario = food.replaceAll(1)
console.log(usuario)*/

const listaDeTarefas = []
const tarefa1 = prompt("Adicione a tarefa 1:")
const tarefa2 = prompt("Adicione a tarefa 2:")
const tarefa3 = prompt("Adicione a tarefa 3:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

const tarefaRealizada=prompt("Qual tarefa voce realizou?")




