console.log("\n\nNessa aula, nós vamos aprender a como mostrar mensagens na tela de uma maneira simplificada usando crase ``");
console.log("Escreva um console.log(``) ← com crases");
console.log("Depois disso, use ${} onde você deseja ver uma variável!");
console.log("console.log(`meu nome é ${nome}!`)");
console.log("Exemplo de maneira antiga: \n\n");

const nome = 'Gabriel';
const sobrenome = 'Gonçalves da Silva';
console.log(nome,sobrenome);
console.log("Você pode usar a vírgula (,) como separador, para que seu nome não fique junto.");

console.log(`\n\nExemplo de maneira simplificada:`);
console.log(`Olá, meu nome é ${nome} ${sobrenome}!!`);

console.log(`Nessa aula, aprendemos sobre as diferenças entre let e const;\n`);
console.log(`\tCONST: Valor inalterável ao longo do tempo.`);
console.log(`\tLET: Permite que o valor da variável seja alterado:`);
let numeroTeste = 1;
console.log(`\n\tMostrando a variável numeroTeste1 mudando valores: `);
console.log(`\t\tValor 1: ${numeroTeste}`);
numeroTeste = 2;
console.log(`\t\tValor 1: ${numeroTeste}`);

console.log("\n\nDicas do professor:");
console.log("\tsempre dê o nome das variáveis o mais detalhado possível!");
console.log("\tDependendo do contexto, opte sempre por variáveis como const");
console.log('\nAs variáveis não tem problemas em mudar de tipo, serem inteiras e depois strings...\n\n');



