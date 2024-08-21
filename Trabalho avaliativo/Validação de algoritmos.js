

const numP2= prompt ("Digite um número") // Nessa constante irei obter, ataves de um prompt, um numero desejado para teste.
if(numP2%2==0){ //Nessa condição está sendo feita a divisao por dois e checando se nao possui sobras.
    console.log("par") //Neste comando será impresso no console "par" se a checagem nao poussuir sobras.
}
if(numP2%2==1){ // Nessa condição está sendo feita a divisão por dois e checando se possui sobras.
    console.log("impar") // Neste comando será impresso no console "impar" se a checagem possuir sobras.
}


/*Caso de teste 1     Caso de teste 2         Caso de teste 3             Caso de teste 4             Caso de teste 5
Dados de entrada = 2  Dados de entrada = 4    Dados de entrada =13        Dados de entrada = 21       Dados de entrada = 37
Saída esperada = par  Saída esperada = par    Saída esperada = ímpar      Saída esperada = ímpar      Saída esperada = ímpar
Saída real = par      Saída real = par        Saída real = ímpar          Saída real = ímpar          Saída real = ímpar
Resultado = passou    Resultado = passou      Resultado = passou          Resultado = passou          Resultado = passou
*/


