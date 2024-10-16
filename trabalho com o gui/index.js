/*const listaDePersonagens = [];//variavel que armazena uma lista de personagem dentro de um array

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
    }*/


        
        let inventario = [
          [null, null, null, null, null],
          [null, null, null, null, null]
        ];
        
        function adicionarItem(item) {
          for (let i = 0; i < inventario.length; i++) {
            for (let j = 0; j < inventario[i].length; j++) {
              if (inventario[i][j] === null) {
                inventario[i][j] = item;
                console.log(Item ${item} adicionado no slot [${i}][${j}].);
                return;
              }
            }
          }
          console.log("Inventário cheio! Descarte um item para adicionar um novo.");
        }
        function removerItem(item) {
          for (let i = 0; i < inventario.length; i++) {
            for (let j = 0; j < inventario[i].length; j++) {
              if (inventario[i][j] === item) {
                inventario[i][j] = null;
                console.log(Item ${item} removido do slot [${i}][${j}].);
                return;
              }
            }
          }
          console.log(Item ${item} não encontrado no inventário.);
        }
        adicionarItem("Pistola");
        adicionarItem("Erva Verde");
        adicionarItem("Chave");
        removerItem("Pistola");
        adicionarItem("Escopeta");
        
      let inimigos = [
          { tipo: "zumbi", vida: 30 },
          { tipo: "zumbi", vida: 50 },
          { tipo: "mutante", vida: 100 }
        ];
        
        function atacarInimigo(arma, dano) {
          for (let i = 0; i < inimigos.length; i++) {
            inimigos[i].vida -= dano;
            console.log(Atacou ${inimigos[i].tipo} com ${arma}, dano: ${dano}, vida restante: ${inimigos[i].vida});
            if (inimigos[i].vida <= 0) {
              console.log(${inimigos[i].tipo} eliminado!);
              inimigos.splice(i, 1); 
              i--; 
            }
          }
        }
        atacarInimigo("pistola", 20);
        atacarInimigo("escopeta", 30);
        
      let estadoJogo = {
          vidaJogador: 100,
          inventarioSalvo: [],
          inimigosSalvos: []
        };
        
        function salvarJogo() {
          estadoJogo.inventarioSalvo = JSON.parse(JSON.stringify(inventario)); 
          estadoJogo.inimigosSalvos = JSON.parse(JSON.stringify(inimigos)); 
          console.log("Jogo salvo!");
        }
        
        function carregarJogo() {
          inventario = JSON.parse(JSON.stringify(estadoJogo.inventarioSalvo)); 
          inimigos = JSON.parse(JSON.stringify(estadoJogo.inimigosSalvos)); 
          console.log("Jogo carregado!");
        }
        salvarJogo();
        removerItem("Erva Verde"); 
        carregarJogo();