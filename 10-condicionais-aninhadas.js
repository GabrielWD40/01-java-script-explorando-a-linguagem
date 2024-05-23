console.log("\n\nNessa aula nós aprendemos um pouco sobre as condicionais aninhadas.");
console.log("Que é quando temos uma condicional dentro de outra e dentro de outra...");
console.log("ATALHO INTERESSANTE: ALT + SHIFT + R identa o código automaticamente, ajuda muito")


console.log("\nVamos umaginar que um sitema verifica a entrada de uma balada");
console.log("\nO nosso sistema precisa verificar a idade do caboclo na entrada!");
console.log("Se ele for > de 18 pode entrar, se for menor de < 18 e estiver acompanhado de outro maior, pode entrar. Se for menor de 18 anos e estiver sozinho, vai ficar pra fora.");

//declaração das variáveis que vamos utilizar: 
const nomePrimeiraPessoa = 'Gabriel';
const idadePrimeiraPessoa = 17;

const nomeSegundaPessoa = 'Mariana';
const idadeSegundaPessoa = 22;

const nomeTerceiraPessoa = 'Emanuelly';
const idadeTerceiraPessoa = 15

let estaAcompanhadoDeUmMaiorDeIdade = true;

console.log(`\nPara isso, temos três pessoas ${nomePrimeiraPessoa} de 17 anos, ${nomeSegundaPessoa} de 22 anos e ${nomeTerceiraPessoa} de 15 anos`);
console.log("Na entrada da balada, cada um deles se depara com a seguinte mensagem:");
console.log("\n\nPara Mariana: ");


//Regra para a Mariana:
if(idadeSegundaPessoa >= 18){
    console.log(`\tBem vinda, ${nomeSegundaPessoa}! Aproveite a balada com seu parceiro.`);
}


// Regra para o Gabriel:
console.log("\n\nPara Gabriel: ");
if(idadePrimeiraPessoa >= 18){
    console.log(`Bem vinda, ${nomePrimeiraPessoa}! Aproveite a balada com seu parceiro.`);
}else if(idadePrimeiraPessoa < 18){
    //verificação se o ser está acompanhado por um maior de idade:
    if(estaAcompanhadoDeUmMaiorDeIdade){
        console.log(`\t${nomePrimeiraPessoa}, parece que você está acompanhado de um maior de idade, a ${nomeSegundaPessoa}. Pode entrar! Bom proveito!`);
    }else{
        console.log("Infelizmente, você não está acompanhado por um maior de idade e ficará de fora.");
    }
}


// Regra para a Manu:
estaAcompanhadoDeUmMaiorDeIdade = false;
console.log(`\n\nPara ${nomeTerceiraPessoa}: `);
if(idadeTerceiraPessoa > 18){
    console.log(`Bem vinda, ${nomeTerceiraPessoa}! Aproveite a balada com seu parceiro.`);
}else if(idadeTerceiraPessoa < 18){
    //verificação se o ser está acompanhado por um maior de idade:
    if(estaAcompanhadoDeUmMaiorDeIdade){
        console.log(`${nomeTerceiraPessoa}, parece que você está acompanhado de um maior de idade, a ${nomePrimeiraPessoa}. Pode entrar! Bom proveito!`);
    }else{
        console.log("\tInfelizmente, você não está acompanhado por um maior de idade e ficará de fora.\n\n");
    }
}

