const listaDePersonagens = [] //array que vai armazenar uma lista de personagens.
const ListaDeAçoes = [] //array que vai armazenar uma lista de açoes.

function Personagem (nome, classe, nivel, hp, habilidadeInical){
const criarPersonagem = { //variavel que vai armazenar todos os dados de novos personagens.
    nome:"",
    nivel:"",
    classe:"",
    habilidadeInicial:"",
    HP:"",
    historicoAçoes:[] //array que guarda o historico de açoes dos personagens.
}
listaDePersonagens.push(criarPersonagem)//adicionando um personagem dentro do array de lista de personagem
}
function criarPersonagem(personagem){
    const criandoPersonagem = personagem ={
        ...criarPersonagem,
        
        classe: String(prompt("Digite a classe do personagem")),//prompt para escolher o nome da sua classe.
        nivel: Number(prompt("digite o nivel do seu personagem")), //prompt que define o nivel do seu personagem, em forma de numero.
        habilidadeInicial: String(prompt("digite a sua habilidade inicial")), //prompt que define a habilidade inicial do seu personagem.
        HP: Number(prompt("digite quanto de HP(pontos de vida) tera seu persongem")) //prompt que define a quantidade de vida do seu personagem, tambem em formato number.
        }
    }
    
    console.log(listaDePersonagem)

 
