console.log("\n\nNessa aula vimos alguns exemplos de OPERADORES LÓGICOS.");
console.log("Para a nossa alegria, os operadores são iguais NA LINGUAGEM C.");
console.log("\tA conjunção E É REPRESENTADA POR &&");
console.log("\tA disjunção OU É REPRESENTADA POR || (duas barras retas)\n\n");

console.log("Nessa aula, eu montei alguns exemplos como o do serviço de alistamento militar!");
console.log("Imagine 4 pessoas que querem se alistar, o jão porqueira, o Bob calça borrada, Joana manca e a Maria vai com as outras!\n");

console.log("Jão tem 18 anos e é homem");
console.log("Bob tem 15 anos e é homem");
console.log("Joana tem 20 anos e é mulher");
console.log("Maria tem 10 anos e é mulher");


console.log("\nPra que é homem e tem 18 anos o alistamento é obrigatório!");
console.log("\nPra que é mulher e tem 18 anos o alistamento é opcional!");

console.log("\nBaseado nisso, nós montamos um sistema: ");

let idade = 10;
const genero = 'F';

//condiç
if(genero == 'M' && idade == 18){
        console.log("Você precisa se alistar");
}else if(genero == 'M' && idade < 18){
        console.log("Você é menor de idade, precisa completar 18 para se alistar!");
}else if(genero == 'M' && idade > 18){
    console.log("Você tem mais de 18 anos, já é pra ter se alistado. Caso ainda não o fez, faça imediatamente!");
}else{
    if(genero == 'F' && idade >= 18){
        console.log("Você está apta a se alistar, se precisar!");
    }else{
        console.log("Seu alistamento é opcional, mas você precisa ter 18 ou mais")
    }
}

console.log("\nNesse sistema, nós brincamos com a condicional \"E\" que é && para ver se a pessoa pode se alistar. Mude os valores manualmente e veja o ciclo do programa!\n\n");


