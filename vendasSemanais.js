let produtos = ["Camisa", "Boné", "Calça", "Blusa"];
let valores = [20.50, 10.00, 50.00, 70.50];
let quantidades = [14, 20, 7, 2];

let totalVendas = 0;
let maiorVenda = 0;
let menorVenda = Infinity;

for (let i = 0; i < produtos.length; i++) {
    let valorVenda = valores[i] * quantidades[i];
    totalVendas += valorVenda;

    if (valorVenda > maiorVenda) {
        maiorVenda = valorVenda;
    }
    if (valorVenda < menorVenda) {
        menorVenda = valorVenda;
    }
}

let mediaDiaria = totalVendas / 7;

console.log(`Total de vendas: R$${totalVendas.toFixed(2)}`);
console.log(`Média diária de vendas: R$${mediaDiaria.toFixed(2)}`);
console.log(`Maior valor de venda: R$${maiorVenda.toFixed(2)}`);
console.log(`Menor valor de venda: R$${menorVenda.toFixed(2)}`);
