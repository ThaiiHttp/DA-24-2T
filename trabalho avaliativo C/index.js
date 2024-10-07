//Zelda

const personagens = [ //array armazenando personagens
    { nome: 'Link', vida: 10, ataque: 5, defesa: 3 },
    { nome: 'Zelda', vida: 8, ataque: 3, defesa: 5 },
    { nome: 'Ganon', vida: 15, ataque: 7, defesa: 4 }
];

const armas = [ //array armazenando armas
    { tipo: 'Espada', nome: 'Master Sword', dano: 10, alcance: 'curto' },
    { tipo: 'Arco', nome: 'Arco de Longe', dano: 7, alcance: 'longo' },
    { tipo: 'Clube', nome: 'Clube de Madeira', dano: 4, alcance: 'curto' }
];

const itens = [ //array armazenando itens
    { nome: 'Bomba', efeito: 'Explosão' },
    { nome: 'Poção', efeito: 'Recupera 5 de vida' },
    { nome: 'Rupees', efeito: 'Moeda para comprar itens' }
];


// Mostrar os personagens
console.log('Personagens:');
for (let i = 0; i < personagens.length; i++) {
    console.log(`Nome: ${personagens[i].nome}, Vida: ${personagens[i].vida}, Ataque: ${personagens[i].ataque}, Defesa: ${personagens[i].defesa}`);
}
// Função para solicitar dados e validar os personagens
function solicitarDados() {
    // Dados do personagem
    const nomePersonagem = prompt('Digite o nome do personagem:');
    const coracoes = Number(prompt('Digite o número de corações (1 a 20):'), 10);
    const personagem = { nome: nomePersonagem, coracoes };

    // Validação do personagem
    console.log(validarPersonagem(personagem));
}



// Função para validar itens
function validarItens(item) {
    const { nome, efeito } = item;
    // Verifica se os itens têm nome e efeitos corretos
    if (typeof nome !== 'string' || nome.trim() === '') {
        return 'Erro: O nome do item deve ser uma string válida.';
    }

    if (typeof efeito !== 'string' || efeito.trim() === '') {
        return 'Erro: Arma com tipo invalido.';
    }

    return 'Sucesso: Arma validada com sucesso!';
 }



// Mostrar as armas
console.log('\nArmas:');
for (let i = 0; i < armas.length; i++) {
    console.log(`Tipo: ${armas[i].tipo}, Nome: ${armas[i].nome}, Dano: ${armas[i].dano}, Alcance: ${armas[i].alcance}`);
}
function validarArmas(arma) {
    const { tipo, dano, alcance } = arma;

    // Verifica se os atributos da arma estão corretos
    if (typeof tipo !== 'string' || tipo.trim() === '') {
        return 'Erro: .';
    }

    if (typeof dano !== 'number' || dano <= 0) {
        return 'Erro: O dano da arma é invalido.';
    }

    if (typeof alcance !== 'number' || alcance <= 0) {
        return 'Erro: O alcance da arma invalido.';
    }

    return 'Sucesso: Arma válida!';
}
// Dados da arma
const tipoArma = prompt('Digite o tipo da arma:');
const dano = Number(prompt('Digite o dano da arma:'), 10);
const alcance = Number(prompt('Digite o alcance da arma:'), 10);

const arma = { tipo: tipoArma, dano, alcance };

// Validação da arma
console.log(validarArmas(arma));




// Mostrar os itens
console.log('\nItens:');
for (let i = 0; i < itens.length; i++) {
    console.log(`Nome: ${itens[i].nome}, Efeito: ${itens[i].efeito}`);
}
// Função para validar itens
function validarItens(item) {
    const { nome, efeito } = item;

    // Verifica se os itens têm nome e efeitos corretos
    if (typeof nome !== 'string' || nome.trim() === '') {
        return 'Erro: O nome do item deve ser uma string válida.';
    }

    if (typeof efeito !== 'string' || efeito.trim() === '') {
        return 'Erro: Arma com tipo invalido.';
    }

    return 'Sucesso: Arma validada com sucesso!';
 }
 
    // Dados do item
    const nomeItem = prompt('Digite o nome do item (ex: Poção):');
    const efeitoItem = prompt('Digite o efeito do item (ex: Cura 20 HP):');

    const item = { nome: nomeItem, efeito: efeitoItem };
    // Validação do item
    console.log(validarItens(item));


    

         