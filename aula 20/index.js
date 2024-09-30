let matriz = [
    [1,2,3],
    [4,5,6]
]
console.log(matriz[1][2]) //6

let matrizes = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
 //Exercicio
 let matriz1 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
 ]
 console.log(matriz1[2][1])
console.log(matriz1)

//Exercicios
let matrizz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
        }
        }
//Um loop percorre as linhas e o outro as colunas.



        let matrizzz = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
            ];
            for (let i = 0; i < matriz.length; i++) {
                for (let j = 0; j < matriz[i].length; j++) {
                matriz[i][j]*=2;
                }
                }
//Percorrendo uma Matriz
let contagem =[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
function calcular(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; // Adiciona o valor para somar
         }
        }
        return soma
    }
    const resultado = calcular(contagem);
console.log(resultado);//o valor foi 136   