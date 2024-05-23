console.log("\n\nNessa aula nós vamos aprender a fazer loopigns com while em JS");
console.log("Vamos brincar com os exemplos dado em aula, o sistema de passagens!");

console.log("\nVamos criar uma lista que contenha o nome de três estados brasileiros. A pessoa deverá informou o nome de um Estado que quer visitar, nós faremos um looping de validação para ver se esse destino está na lista.");


const listaDeEstados = new Array(
    "Paraná",
    "Santa Catarina",
    "Rio Grande do Sul"
);

const estaAcompanhado = true;
const idadeComprador = 18;
const podeComprar = (estaAcompanhado == true || idadeComprador > 18); //aqui estamos adicionando um valor boleano a essa variável!
let contador = 0;// repare que aui colocamos o let, porque o valor dessa variável vai mudar!
let destinoEscolhidoPeloCliente = "Ceará";

console.log(`\nNossa lita: ${listaDeEstados}`);

console.log("\nAgora, vamos fazer uma looping de verificação e ver se o destino escolhido está na nossa lista:");
console.log("\nVamos supor que aqui a pessoa escolheu um destino de fora da lista: ");
while(contador < listaDeEstados.length){
    if(listaDeEstados[contador] != destinoEscolhidoPeloCliente){
        console.log("Não encontrado!");
    }else{
        console.log("Destino encontrado!");
    }
    contador ++;
}

destinoEscolhidoPeloCliente = "Paraná";
contador = 0;
console.log("\n\nnVamos supor que aqui a pessoa escolheu um destino que está dentro da lista: ");
while(contador < listaDeEstados.length){
    if(listaDeEstados[contador] != destinoEscolhidoPeloCliente){
        console.log("Não encontrado!");
    }else{
        console.log("Destino encontrado!");
    }
    contador ++;
}

console.log("\nMas repare que mesmo após achar o que era procurado, ele continua procurando o item. Naa próxima aula, vamos resolver isso!\n\n");