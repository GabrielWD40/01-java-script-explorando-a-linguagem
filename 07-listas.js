console.log("\n\nNessa aula, nós vamos brincar com as litas. Listas são chamadas de arrays em JavaScript!");
console.log("As listas facilitam o armazenamento de vários dados que representam um mesmo siginificado, ex: nome dos Estados brasileiros");

console.log("Ao invés de declrarmos uma variável para cada Estado, podemos criar uma única variável que conterá todos esses nomes.");
console.log("As listas são definidas como: const/let nomeDaLista = new Array(\ne aqui você colocar os elementos separados por uma ',' vírgula)\n\n");


console.log("Você também pode adicionar itens a essa lista, por mais que ela esteja com um nome de const. Já explico mais sobre isso!");
const minhaColecaoDeCarros = new Array(
    'Megane RT 2.0 2000',
    "BMW M3 GTR 2005",
    "Corvette Z06"
);
console.log("No exemplo em questão, eu criei uma lista chamada de minhaColecaoDeCarros, que contém 3 carros que eu tive/quero ter.");
console.log(minhaColecaoDeCarros);
console.log("\n\nAgora, eu quero colocar mais um carrão nessa lista. Para isso, vamos utilizar o comando NOME_DA_LISTA.PUSH(\"elemento\")");
minhaColecaoDeCarros.push("mercedes amg gtr");
console.log(minhaColecaoDeCarros); //adicionando um item à lista!

console.log("\n\nA questão dos erros por eu declarar a lista como const é a seguinte: Eu não posso simplesmente posso atribuir um outro valor a ela. Por exemplo, eu fiz uma lista e depois eu quero que essa lista vire um número inteiro.");
console.log("Aqui a relação é sobre alterar a variável em si, é querer transformar uma lista numa string, ou coisa do tipo, sem o atribuidor push.\n\n");

// UTILIDADE ÓTIMA ENSINADA PELO PROFESSOR: 

// ctrl + k + c comenta várias linhas de uma só vez
// ctrl + k + u remove os comentários de ua só vez

const estadosBrasileiros = new Array(
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
);