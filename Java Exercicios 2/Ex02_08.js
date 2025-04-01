const prompt = require('prompt-sync')();
 let vendas = Number(prompt("Quanto que voce vendeu?"))
 
 if (vendas > 5000) {
    let comissao = (vendas * 0.05)
    console.log(`Voce tera uma comissao de: ${comissao}`);
 } else {
    let comissao = (vendas * 0.03)
    console.log(`Voce tera uma comissao de: ${comissao}`);
 }

 