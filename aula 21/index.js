//Exercicios: O que sera impresso no console.

let matriz = [ 
   [1, 2],
   [3, 4],
   [5, 6, 7]
];
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        if([i][j] %2===0){
            console.log([i][j]);
        }
    }
}
//imprime os numeros pares no console




let matrizz=[//imprime a soma das colunas, o valor da soma sera 225.
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45],
];
let soma = 0;
for (let i=0; i<matriz.length; i++){
    for(let j=0; j<matrizz[i].length; j++){
        soma+= matrizz [i][j];
    }
}
console.log(soma)





//Exercicios de fixaçao
let terreno=[
    [0,0,0,1,1],
    [1,2,1,1,2],
    [2,2,2,0,0],
    [0,1,1,0,0],
    [2,2,0,1,2]
];
console.log(terreno)




//Exercicios p gerar terreno
function gerarTerreno(){//funçao para gerar matriz com numero aleatorio 0,1,2.
    return Math.floor(Math.random() *3);
}
let mapa = [];//função para criar matriz 5x5
for (let i = 0; i < 5; i++){
    let linha=[];
    for(let j=0; j<5; j++){
        linha.push(gerarTerreno());
    }
mapa.push(linha);
console.log(linha.join(" | ")); // Impressão da linha
    }
 



//Exercicio pontuação de jogadores
let pontos = [
    [10, 20, 30, 40],//player 1 
    [15, 20, 25, 30],//player 2
    [30, 40, 45, 50]//player 3
];
let total = [];

for(let i=0; i<pontos.length; i++){
    let soma=0
    for(let j=0; j<pontos[i].length; j++){
        soma+=pontos[i][j]
    }
    total.push(soma);
}
for (let i = 0; i < total.length; i++) {
    console.log(`Pontuação total do Jogador ${i + 1}: ${total[i]}`);
}
//a pontuaçao sera 100, 90, 165




//Exercicio invertendo as posiçoes
 let inverter = [// criaçao da matriz 4x4
    [1, 2, 3, 4],
    [10, 11, 12, 13],
    [21, 22, 23, 24],
    [99, 100, 101, 102]
 ]     
 function inverterPosiçao(inverter) { //funçao para inverter os numeros da matriz
    for(let i=0; i<inverter.length; i++){
inverter[i].reverse()
 }
}
inverterPosiçao(inverter)
 console.log(inverter)

    



    
         

