/*let primeiroValor =Number(prompt  ("Digite um numero!"))
let segundoValor = Number(prompt ("Digite um numero!"))
const soma = primeiroValor + segundoValor
console.log (soma)*/


//Exercicios de fixação

/*const idadeUsuario = Number(prompt("Sua idade?"))
const idadeAmigo = Number(prompt("Idade do seu melhor amigo?"))
const idade = idadeUsuario>idadeAmigo ? true || false
const diferença = idadeUsuario-idadeAmigo
console.log("Sua idade é maior do que a do seu amigo?", idade,"a diferença de idades é:", diferença)*/


/*const idade =Number(prompt("Sua idade?"))
const idadeM = idade * 12
const idadeD = idade * 365
const idadeH = idade * 8766
console.log(idadeM, idadeD, idadeH)*/

//exemplo concatenação
/*const nome = prompt("Qual seu nome?")
const cor = prompt("Qual sua cor favorita?")
console.log("Meu nome é " + nome + " e minha cor favorita é " + cor )*/

//exemplo template
/*const nome = prompt("Qual seu nome?")
const cor = propt ("Qual sua cor favorita?")
const frase = `Meu nome é ${nome} e minha idade é: ${idade} anos`*/

//Prototipo de String
const nome = "Prof Thai"
console.log (nome.length) //le o numero de carcateres

const frase = "MeeU NoMME é ThAAII"
console.log(frase.toLowerCase()) //para todas as letras minusculas

const texto = "kkkk"
console.log(texto.toUpperCase()) // para todas as letras maiusculas

const email = " Thaissafernandesnunes@gmail.com "
console.log(email.trim())//retira somente os espaços do inicio e do final

const frasee = "Hoje comi cenourinha"
console.log(frasee.includes("cenourinha"))//para procurar uma palavra dentro do texto, vai parecer true ou false

const frase1 = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase1.replaceAll
("cenoura", "batata")
console.log(novaFrase)// troca uma parte do texto ou outra, funciona coma ou duas palavras

//Arrays
const frutas = ["abacate", "banana", "tomate", "milho", "uva", "morango"] //arrays sao variaveis do tipo lista
const fruta = frutas[4] 
console.log(fruta)

/*const raçasDeCachorro = ["pinscher", "puddle", "pitbull", "lulu", "dalmata"]
const dog =Number(prompt("Digite um numero de 0 a 4:"))
console.log(dog, raçasDeCachorro[dog])*/

/*const pokemon = ["Pikachu", "PsyDuck", "Genesect", "bulbassauro"]
console.log(pokemon.length) // vai nos passar a quantidade de textos dentro de um array*/

/*const serieBoas = ["Black mirror", "Death Note", "The Big bang Theory"]
console.log(serieBoas.includes("Death Note"))
console.log(serieBoas.includes("Black mirror"))*/

/*const numeros = [1,2,3]
numeros.push(4)
console.log(numeros) // 4
numeros.push(5,6,7,8)
console.log(numeros)//5,6,7,8

const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()//apaga o ultimo texto do array
console.log(meusPeixes)*/

/*const letras = ["A", "B","C", "D", "E", "F"]
letras.splice(0,2)
console.log(letras)*/

const number = [1,2,3,4,5,6]
console.log(number.length) //6
number.push(7)
number.splice(3,2)
console.log(number)


