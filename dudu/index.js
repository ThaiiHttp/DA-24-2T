// Array para armazenar os personagens
const personagens = [];

// Função para criar um novo personagem
function criarPersonagem(nome, classe, nivel, hp, habilidades) {
    const novoPersonagem = {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidades: habilidades,
        historicoAcoes: [] // Inicializa o histórico de ações
    };
    personagens.push(novoPersonagem); // Adiciona o personagem ao array
    console.log(`Personagem ${nome} cadastrado com sucesso.`);
}

// Função para realizar uma ação e registrar no histórico
function realizarAcao(nome, acao) {
    const personagem1 = buscarPersonagem(nome); // Busca 
    const personagem = buscarPersonagem(nome); // Busca o personagem pelo nome
    if (personagem) {
        personagem.historicoAcoes.push(acao); // Adiciona a ação ao histórico
        console.log(`${personagem.nome} realizou a ação: ${acao}`);
    } else {
        console.log(`Personagem ${nome} não encontrado.`);
    }
}

// Função para buscar um personagem pelo nome
function buscarPersonagem(nome) {
    return personagens.find(p => p.nome.toLowerCase() === nome.toLowerCase()); // Busca ignorando maiúsculas/minúsculas
}

// Função para listar todos os personagens em ordem alfabética
function listarPersonagens() {
    const nomesOrdenados = personagens.map(p => p.nome).sort(); // Obtém e ordena os nomes
    console.log("Personagens cadastrados:");
    nomesOrdenados.forEach(nome => console.log(nome)); // Exibe cada nome
}

// Função para exibir o status de um personagem
function exibirStatus(nome) {
    const personagem = buscarPersonagem(nome);
    if (personagem) {
        console.log(personagem);
    } else console.log(`Personagem ${nome} não encontrado.`);
}

// Exemplo de uso do sistema
criarPersonagem("Aragorn", "Guerreiro", 10, 100, ["Corte Rápido", "Investida"]);
criarPersonagem("Legolas", "Arqueiro", 10, 80, ["Flecha Perfurante", "Esquiva Rápida"]);
criarPersonagem("Gandalf", "Mago", 20, 70, ["Fogo Fátuo", "Bola de Fogo"]);

// Listar personagens
listarPersonagens();

// Realizar ações
realizarAcao("Aragorn", "Atacar com espada");
realizarAcao("Legolas", "Disparar uma flecha");
realizarAcao("Gandalf", "Lançar Bola de Fogo");

// Exibir status de um personagem
exibirStatus("Aragorn");