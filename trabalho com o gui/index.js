const listaDePersonagens = [] // array que armazena os personagens.

let listaDeacoes = [] // variavel que armazena uma lista de açoes.

const personagemNUll = { // variavel que armazena o valor, nome. class, nivel, habilidade inicial, HP e historico de açoes dos personagen.
    nome: "", 
    class: "",
    nivel: "",
    habilidadeInicial: "",
    HP: "",
    historicoAcoes: []
}
function criarPersonagem(personagem){ // funçao para criar um personagem
    const criandoPersonagem = personagem = { //variavel que armazena os dados das perguntas feitas atraves do prompt
        ...personagemNUll,
        nome: String(prompt("digite o nome do seu personagem")),//prompt para criar o nome do personagem.
        class: String(prompt("digite o nome da sua classe")), //prompt para escolher o nome da sua classe.
        nivel: Number(prompt("digite o nivel do seu personagem")), //prompt que define o nivel do seu personagem, em forma de numero.
        habilidadeInicial: String(prompt("digite a sua habilidade inicial")), //prompt que define a habilidade inicial do seu personagem.
        HP: Number(prompt("digite quanto de HP(pontos de vida) tera seu persongem")) //prompt que define a quantidade de vida do seu personagem, tambem em formato number.
    }
    listaDePersonagens.push(criandoPersonagem)//armazenando as informaçoes de personagem no array listaDePersonagem.
}
//Testes de funcionalidade.
criarPersonagem(personagemNUll) 
console.log(listaDePersonagens)
criarPersonagem(personagemNUll)

function ataqueNormal() { //funçao para realizar um ataque
const ataque = "voce fez um ataque normal" 
console.log(ataque) 
 listaDeacoes.push(ataque) //armazenando as informaçoes de ataque no array listDeAçoes
}

function ataqueEspecial() { //funçao para realizar um ataque especial
    const ataque = "voce fez um ataque especial"
console.log(ataque)
 listaDeacoes.push(ataque) 
}

function defesa() { //funçao para realizar uma defesa
    const defesa = "voce usou uma defesa"
console.log(defesa)
 listaDeacoes.push(defesa)
}

defesa()
ataqueEspecial()
ataqueNormal()
console.log(listaDeacoes)

function acoes(listaDePersonagens) { //
    listaDePersonagens.historicoAcoes.push(defesa());
    listaDePersonagens.historicoAcoes.push(ataqueNormal());
    listaDePersonagens.historicoAcoes.push(ataqueEspecial());
  }
  
