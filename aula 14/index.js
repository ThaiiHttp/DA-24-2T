//Contador simples

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let numero = [numeros [0]]
for (numero = 0; numero <11; numero++){
    console.log(numero)
    
}
//Contador de pares
for(let numero of numeros){
    if(numero% 2==0){
        console.log(numero)
    }
}

//Tabuada
/*let numeru = Number(prompt("Digite um numero:"))
let i = numeru
for(let i = 0; i<=10; i++){
    console.log(numeru*i)
}*/


//Soma de numeros

let numeross
let soma= 0;
let meuArray=[]
for(let contador = 1; contador<=5; contador++){
     numeross=Number(prompt("Digite um numero:"))  
    meuArray.push(numeross)
    console.log(meuArray)
}
for(let numero of meuArray){
    soma+=numero
}
console.log(soma)
ls

     


    
 