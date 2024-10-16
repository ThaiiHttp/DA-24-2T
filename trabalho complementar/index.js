// O jogo

// Objeto que representa o jogador
const player = {
  nome: '',
  pontuacao: 0,
  nicel: 1,
};

// Metodo para aumentar a pontuaçao do jogador
function aumentarPontuacao(player, pontos) {
    jogador.pontuacao += pontos;
    verificarNivel(player);
    }

// Metodo para verificar se o jogador subira de nivel
function verificarNivel(player) {
     for (let i = 1; player.pontuacao >= i * 1000; i++) {
         player.nivel = i + 1; 
        }
    }

// Metodo para exibir o nivel e a pontuaçao
    function exibirPontuacao(player) {
        console.log(`Nome: ${player.nome}`);
        console.log(`Pontuacao: ${player.pontuacao}`);
        console.log(`Nivel: ${player.nivel}`);
    }

// Array de objetos que representa a loja de itens juntamente com o valor de cada um deles
const lojaDeItens = [
    { nome: 'Espada de anduril', tipo: 'arma', preco: 150 },
    { nome: 'Cota de malha', tipo: 'armadura', preco: 100 },
    { nome: 'Pocao de cura', tipo: 'pocao', preco: 50 },
    { nome: 'Arco de legolas', tipo: 'arma', preco: 120 },
    { nome: 'Escudo de gondor', tipo: 'armadura', preco: 200 },
    { nome: 'Pocao de mana', tipo: 'pocao', preco: 70 }
    ];

    // Funçao que permite comprar um item da loja
    function comprarItem(itemNome) {
        const item = lojaDeItens.find(i => i.nome === itemNome);
        
        if (item) {
            console.log(`Voce comprou: ${item.nome} por ${item.preco} moedas.`);
        } else {
            console.log(`Item ${itemNome} nao disponivel na loja.`);
        }
    };

// Funçao que verifica os itens disponiveis na loja
    function exibirItensDisponiveis() {
        console.log('Itens disponiveis na loja:');
        lojaDeItens.forEach(item => {
            console.log(`${item.nome} - Tipo: ${item.tipo}, Preco: ${item.preco} moedas`);
        });
    };

// Funçcao para atacar
    function atacar(atacante, defensor) {
        const dano = Math.max(atacante.forca - defensor.defesa, 0);
 };
// Diminui a vida do defensor
 defensor.vida -= dano;
// Mostra o resultado no console
 console.log(`${atacante.nome} atacou ${defensor.nome} e causou ${dano} de dano.`);
    console.log(`${defensor.nome} agora tem ${defensor.vida} de vida.`);

// Array de objetos representando as missoes
    const missoes = [
        { titulo: 'Salvar a Aldeia', descricao: 'Defenda a aldeia dos invasores.', recompensa: 200 },
        { titulo: 'Cacar o Dragao', descricao: 'Derrote o dragao que aterroriza a regiao.', recompensa: 300 },
        { titulo: 'Encontrar o Anel', descricao: 'Recupere o anel perdido na Floresta Sombria.', recompensa: 500 }
];

// Funçao para exibir as missoes disponiveis
function exibirMissoes() {
    console.log('Missoes disponiveis:');
    missoes.forEach((missao, index) => {
        console.log(`${index + 1}. ${missao.titulo} - ${missao.descricao} (Recompensa: ${missao.recompensa} moedas)`);
    });
};

// Funçao para completar uma missao
function completarMissao(tituloMissao) {
    const indiceMissao = missoes.findIndex(missao => missao.titulo === tituloMissao);
    if (indiceMissao !== -1) {
        const missaoCompleta = missoes[indiceMissao];
// Remove a missão do array
        missoes.splice(indiceMissao, 1); 

        console.log(`Voce completou a missao: ${missaoCompleta.titulo}. Recompensa: ${missaoCompleta.recompensa} moedas.`);
    } else {
        console.log(`Missao '${tituloMissao}' nao encontrada.`);
    }
};
// Array de objetos representando os jogadores
const players = [
    { nome: 'Aragorn', nivel: 5, pontuacao: 1200 },
    { nome: 'Legolas', nivel: 4, pontuacao: 1500 },
    { nome: 'Gimli', nivel: 3, pontuacao: 800 },
    { nome: 'Frodo', nivel: 2, pontuacao: 600 },
    { nome: 'Sam', nivel: 1, pontuacao: 700 }
];

// Funçao para exibir o ranking dos jogadores
function exibirRanking() {
// Organiza o array pela pontuação de forma decrescente
    players.sort((a, b) => b.pontuacao - a.pontuacao);
};

console.log('Ranking dos melhores jogadores:');
    players.forEach((players, index) => {
        console.log(`${index + 1}. ${jogador.nome} - Nível: ${jogador.nivel}, Pontuacao: ${jogador.pontuacao}`);
    });
   

