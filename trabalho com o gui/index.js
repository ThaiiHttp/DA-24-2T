const listaDePersonagens = [];//variavel que armazena uma lista de personagem dentro de um array

let listaDeacoes = [];//variavel que armazena uma lista de açoes dentro de um array

const personagemNUll = { //variavel que armazena (nome, classe, nivel, habilidade e Hp do personagem)
  nome: "",
  class: "",
  nivel: "",
  habilidadeInicial: "",
  HP: "",
  historicoAcoes: [], // array que armazenará o historico de açoes do personagem
};
function criarPersonagem(personagem) { //funçao para criar personagem
  const criandoPersonagem = (personagem = {
    ...personagemNUll,
    nome: String(prompt("digite o nome do seu personagem")), //prompt para criar o nome do personagem
    class: String(prompt("digite o nome da sua classe")), //prompt para criar a classe do personagem
    nivel: Number(prompt("digite o nivel do seu personagem")), // prompt para definir o nivel do personagem, em formato de numero
    habilidadeInicial: String(prompt("digite a sua habilidade inicial")), // prompt para definir a habilidade inicial do personagem
    HP: Number(
      prompt("digite quanto de HP(pontos de vida) tera seu persongem") // prompt para definir a pontuaçao de vida do personagem, tambem em formato number
    ),
  });
  listaDePersonagens.push(criandoPersonagem); //chamando a funçao criando personagem
}
criarPersonagem(personagemNUll);
console.log(listaDePersonagens);
criarPersonagem(personagemNUll);

function ataqueNormal() { //funçao para fazer um ataque
  const ataque = "voce fez um ataque normal";
  console.log(ataque);
  listaDeacoes.push(ataque);
  personagemNUll.historicoAcoes.push(ataque);
}

function ataqueEspecial() { //funçao para fazer um ataque especial
  const ataque = "voce fez um ataque especial";
  console.log(ataque);
  listaDeacoes.push(ataque);
  personagemNUll.historicoAcoes.push(ataque);
}

function defesa() { //funçao para usar uma defesa
  const defesa = "voce usou uma defesa";
  console.log(defesa);
  listaDeacoes.push(defesa);
}

defesa();
ataqueEspecial();
ataqueNormal();
acoes(listaDePersonagens[1]);
console.log(listaDeacoes);

function acoes(listaDePersonagens) { //funçao que lista os personagens
  listaDePersonagens.historicoAcoes.push(defesa());
  listaDePersonagens.historicoAcoes.push(ataqueNormal());
  listaDePersonagens.historicoAcoes.push(ataqueEspecial());
}

const buscar = prompt("digite um personage para buscar") //variavel que busca um personagem especifico
console.log(listaDePersonagens.find((personagem) =>  personagem.nome === buscar ))

const excluir = prompt("digite o nome de um personagem para excluir ele ") //variavel que permite excluir um personagem
console.log(listaDePersonagens.splice((personagem) => personagem.nome === excluir))

const listaAlfabética = listaDePersonagens["nome"].sort(); //variavel que lista os personagens em ordem alfabetica

console.log(listaAlfabética) //imprime a lista de personagens em ordem alfabetica

function exibirStatus(nome) {
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        console.log(personagem);
    } else {
        console.log(`Personagem ${nome} não encontrado.`);
    }
}
