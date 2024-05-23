console.log("\n\nNessa aula, nós vamos aprender a remover itens da nossa lista!");
console.log("O comando que vamos utilizar é o (nomeDaLista.splice(posição quecomeça a fazer o delete, quantidade de itens que serão deletados a partir da posição informada))");

console.log("\n\nExemplo, se você colocar: nomeDaLista.splice(2, 2)");
console.log("Está dizendo para a linguagem que a partir da posição 2, é para ecluir dois elementos. Importante: a contagem começa partir do 0");
console.log("se liga na lista de carros que nós fizemos na aula passada:");
const minhaColecaoDeCarros = new Array(
    'Megane RT 2.0 2000',
    "BMW M3 GTR 2005",
    "Corvette Z06",
    "mercedes amg gtr",
    "fusca"
);
console.log(minhaColecaoDeCarros);
console.log("Supondo que eu queria deletar o fusca, que eu não gosto, eu devo fazer o seguinte: ");
console.log("Ver a posição dele e pedir para apagar 1 elemento, se liga.");
console.log("Ele está na posição 4, pois nossa contagem começa em 0.");
console.log("\nCom base nisso, vamos fazer: minhaColecaoDeCarros.slice(4,1)");
minhaColecaoDeCarros.splice(4,1);
console.log(minhaColecaoDeCarros);

console.log("\n\nVeja que o fusca foi removido dessa lista depois de usarmos o SPLICE!");

console.log("\n\nPara mostrar elementos especifícos, basta você informar o posição do índice.");
console.log("Eu gosto muito da mercedes, e só quero mostrar ela, que está na posição 3.");
console.log("\nPara isso eu farei: minhaColecaoDeCarros[3]");
console.log(minhaColecaoDeCarros[3]);
console.log("Importante, sempre use CHAVES na hora de printar uma parte da lista nomeDaLista[nº do índice]\n\n");