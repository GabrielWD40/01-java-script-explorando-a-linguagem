console.log("\nNessa aula nós aprendemos a concatenar as coisas: ");
console.log("Se eu quiser juntar '2020' com 'ano do caos' basta fazer");

const ano = 2020;
const nomeDoAno = "ano do caos";
const piorAnoDeTodos = ano + nomeDoAno; 

console.log(piorAnoDeTodos);
console.log("Nesse exemplo concatenamos uma palavra com um número!\n");
console.log("Mas e agora, se eu quiser somar dois textos que são números?");
console.log("variavel1 = \"2\"  + variavel2 = \"2\" = ?");
console.log("O resultado acima dará o resultado 22, porque ele entende o que está sob \" \" como texto. Aí ele concatenou!");
console.log("\nAgora, vamos aprender a fazer conversão de tipos!");
console.log("Para isso, use a função: \"PARSE\"\n");
console.log("\tparseFloat() → converte para números com vírgula");
console.log("\tparseInt() → converte para números inteiros");
console.log("\nExemplos: \n");
const numero1 = "4";
const numero2 = "3";
console.log("\tTemos o texto como número ("+ numero1 + ") e ("+ numero2 +")");
console.log("\tSomando eles sem o parseInt():", (numero1 + numero2));

console.log("\nAgora, vamos utilizar a função e ver o que acontece:");
console.log("3 + 4 =", parseInt(numero1) + parseInt(numero2));

console.log("\nHá uma curiosidade bem legal sobre tudo isso!");
console.log("Se você tentar colocar qualquer outro tipo de conta com textos, automaticamente, o interpretador tenta converter os operandos em números. Caso contrário, ele retorna NAN!");
console.log("Exemplo de conta convertida automaticamente:", (ano / 5));
console.log("Exemplo de conta NAN:", ("gabriel" / 6));
console.log("NAN = Not A Number\n\n");

