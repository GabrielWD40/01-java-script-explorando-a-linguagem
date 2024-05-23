console.log("\n\nTrabalhando com condicionais: IF e ELSE");
console.log("Nesse exemplos, vamos brincar com um bar");
console.log("Se a pessoa tiver 18 anos ou mais, ela pode comprar os itens da lista! Senão, não vai comprar nada!");

const nomeDoMaiorDeIdade = 'Jão';
const nomeDaMenorDeIdade = 'Maria';
const idadeDoMaiorDeIdade = 24;
const idadeDoMenorDeIdade = 16;

console.log("\nVamos supor que existam duas pessoas, o Jão e a Maria.");
console.log("Jão é um cara adulto, porqueira e que enche a cara todos os dias. Ele tem 24 anos!");
console.log("Já a Maria, é a adolescente da pá virada que gosta de fazer status com cerveja. Ela tem 16 anos!");

console.log("\nNesse nosso sistema, só o Jão vai poder comprar nesse bar porque é maior de idade.");
//criação de uma lista:
const itensDoBar = new Array("Cerveja", "Cigarro", "Conhaque", "drogas");
console.log(`Os itens do bar são: ${itensDoBar}`);

console.log("\n\nEntão, o jão vai comprar no Bar da Pesada e se depara com a seguinte mensagem: ");
if (idadeDoMaiorDeIdade >= 18){
    console.log(`\n\nBem vindo ao Bar da Pesada, ${nomeDoMaiorDeIdade}! \nPode comprar o que você quiser, já és maior de idade.`);
    console.log("Escolha o que quiser:");
    console.log(itensDoBar);
}

console.log("\nJá a Maria, possuída pelo Zé Pilintra, foi tentar comprar uma brama e se deu mal porque meu sistema é bom demais!");
console.log("Olha a mensagem que apareceu pra ela quando ela foi tentar comprar uma gelada:");
if(idadeDoMenorDeIdade >= 18){
    console.log(`\n\nBem vindo ao Bar da Pesada, ${nomeDoMenorDeIdade}! \nPode comprar o que você quiser, já és maior de idade.`);
    console.log("Escolha o que quiser:");
    console.log(itensDoBar);
}else{
    console.log(`\n\nBem vinda, ${nomeDaMenorDeIdade}! \nJá trocou a sua fralda hoje? Bebês devem estar dormindo ou estudando.`);
    console.log("Rala daqui, você não pode comprar nade desse bar, só comida. Mas nós não temos comida!");
    console.log("Ligando pro PROERD....\n\n");
}
console.log("=================================================================================================================")

console.log("Vimos alguns operadores aritiméticos nesa aula: \n\n\toperador de maior > \n\toperador de menor < \n\toperador de igualdade ==");
console.log("\toperador de maior ou igual >= \n\toperador de menor ou igual <= \n\toperador de desigualdade !=\n\n");

!=


