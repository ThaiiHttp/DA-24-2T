// Variavel que armazena os recursos 
let inventario = new Array(10).fill(null); 

// variavel que armazena os inimigos
let inimigos = [
    { tipo: "Boss", vida: 100, dano: 30 }, 
    { tipo: "Zumbi", vida: 200, dano: 40 } 
];

// Vida do jogador
let vidaJogador = 100; 

function adicionarItem(item) { //Funçao para adicionar umm item no inventario
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i] === null) {
            inventario[i] = item;
            alert("Item adicionado com sucesso: " + item);
            return;
        }
    }
    alert("O inventário esta cheio! Descarte um item.");
}

function removerItem(index) { //Funçao para remover um item do inventario
    if (index >= 0 && index < inventario.length) {
        if (inventario[index] !== null) {
            inventario[index] = null;
            alert("O item foi removido.");
        } else {
            alert(" O Slot esta vazio.");
        }
    } else {
        alert("Índice inválido.");
    }
}

function mostrarInventario() { //Funçao para abrir o inventario
    let itens = "Inventário:\n";
    for (let i = 0; i < inventario.length; i++) {
        itens += `${i}: ${inventario[i] !== null ? inventario[i] : "vazio"}\n`;
    }
    alert(itens);
}

function atacar(inimigoId, dano) { //Funçao para atacar inimigos 
    let inimigo = inimigos[inimigoId];
    if (inimigo) {
        inimigo.vida -= dano;
        alert(`${inimigo.tipo} sofreu ${dano} de dano.`);
        
        if (inimigo.vida <= 0) {
            alert(`${inimigo.tipo} foi eliminado!`);
            inimigos.splice(inimigoId, 1); // Remove o inimigo do array
        }
    } else {
        alert("Inimigo não encontrado.");
    }
}

function mostrarInimigos() {// Função para exibir os inimigos no console
    let mensagemInimigos = "Lista de Inimigos:\n";
    inimigos.forEach((inimigo, index) => {
        mensagemInimigos += `${index}: ${inimigo.tipo} (Vida: ${inimigo.vida})\n`;
    });
    console.log(mensagemInimigos);
}

// Função para salvar o estado do jogo
function salvarJogo() {
    console.log("Progresso do jogo gravado com sucesso!");
}

// Função para restaurar o estado do jogo
function carregarJogo() {
    console.log("Progresso do jogo restaurado com sucesso!");
}

function Curar (valorCura) {
    if (valorCura > 0) {
        vidaJogador += valorCura;
        console.log(`Você restaurou ${valorCura} de vida. Vida atual: ${vidaJogador}`);
    } else {
        console.log("A quantidade de cura deve ser um valor positivo.");
    }
}

function exibirMenu() {
    const opcoes = [
        "1. Adicionar item",
        "2. Remover item",
        "3. Mostrar inventário",
        "4. Atacar inimigo",
        "5. Mostrar inimigos",
        "6. Salvar jogo",
        "7. Carregar jogo",
        "8. Curar",
        "0. Sair"
    ];

    while (true) {
        let escolha = prompt(`Escolha uma opção:\n${opcoes.join("\n")}`);

        if (escolha === "0") {
            console.log("Saindo do jogo...");
            break;
        }

        processarEscolha(escolha);
    }
}

function processarEscolha(escolha) {
    switch (escolha) {
        case "1":
            let novoItem = prompt("Digite o nome do item:");
            if (novoItem) {
                adicionarItem(novoItem);
            } else {
                alert("O nome do item não pode ser vazio.");
            }
            break;
        case "2":
            let index = Number(prompt("Digite o índice do item a remover (0-9):"));
            removerItem(index);
            break;
        case "3":
            mostrarInventario();
            break;
        case "4":
            let inimigoId = Number(prompt("Digite o índice do inimigo a atacar (0 ou 1):"));
            let dano = Number(prompt("Digite o dano a ser causado:"));
            if (dano > 0) {
                atacar(inimigoId, dano);
            } else {
                alert("O dano deve ser maior que zero.");
            }
            break;
        case "5":
            mostrarInimigos();
            break;
        case "6":
            salvarJogo();
            break;
        case "7":
            carregarJogo();
            break;
        case "8":
            let pontosCura = Number(prompt("Digite a quantidade de vida para curar:"));
            Curar(pontosCura);
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    }
}

// Iniciar o jogo
exibirMenu();

/*foi feita a escolha de uma variavel do tipo array para armazenar ate 10 slots no inventario e guardar os itens escolhidos pelo jogador.  Apos, outra variavel do tipo array que armazenou dois tipos de inimigos, juntamente com suas vidas e quanto de dano podem causar ao atacar o jogador. 
Foi criado uma funcao para adcionar itens ao inventario, utilizei o metodo FOR que permite percorrer os slots e encontrar um espaco vazio para armazenar um novo item. A funcao termina apos adicionar o item desejado se houver slots disponiveis, se nao encontrar espaco imprime a mensagem de que o inventario esta cheio. Por isso usei outra funcao que nos permite excluir um item do inventario usando o metodo IF ELSE, ela verifica se o indice do slots e valido e apos limpa o mesmo se nao houver item parar remover ele nos informara, assim como se oo indice nao for valido.
Criei uma funcao para mostrar o decorrer do inventario no jogo, usei o metodo FOR para montar uma string com a lista de itens e um alert para exibir o pop-up ao jogador. Para atacar inimigos usei um IF ELSE, inicialmente ele identifica o inimigo pelo numero de indice, apos escolher o valor do dano a ser causado, ele ou diminui a vida do inimigo e verifica se ele fo derrotado ou se ele ataca de volta por ainda estar vivo, se o indice nao for valido o console imprime que o inimigo nao existe, fiz uma funcao paa mostrar os inimigos atuais e quanto ainda resta de vida a eles, usando uma funcao que mosta uma string com a lista dos inimigos existentes. 
Funcao salvar jogo que nos permite guardar o processo atual em que o jogo esta e outra funcao para restaurar o jogo de volta ao inicio, essas duas opcoes estarao disponiveis por indice impresso no console.
Criei uma funcao usando IF ELSE para curar a vida do jogador, o valor de curo tem de ser maior que 0, se for maior ou igual a 0 ele aumenta a vida do jogador, se nao, ele imprime a mensagem de que o valor deve ser positivo. Por fim uma funcao para exibir o menu do jogo, uma variavel CONST que guarda todas as opcoes que o jogo oferece, organizado por indice. Para exibir o menu criei um laco que fica em loop ate o jogador escolher sair do jogo.
Uma funcao para processar a escolha do jogador, se for 1 chamara a funcao para adicionar item, informa tambem que o item nao pode ser vazio. Se for 2`chamara a funcao que remove um item do slot;  se for `3`chama a funcao que mostra o inventario; se for `4`chama a funcao que ataca um inimigo e tambem pode aparecer o alerta caso o dano. nao for maior que 0. Se for `5`chama a funcao que mostra os inimigos ainda existentes; Se for `6 salvara o jogo; se for `7`recarrega o jogo; se for `8`chamara a funcao que cura o jogador, tambem com alert caso o valor de cura nao seja valido. */