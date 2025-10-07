let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(id, nome, preco) {
    let produtoExistente = carrinho.find(item => item.id === id);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nome} foi adicionado ao carrinho!`);
}

if (document.querySelector('#tabelaCarrinho')) {
    const tabelaCarrinho = document.querySelector('#tabelaCarrinho tbody');
    carrinho.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nome}</td>
            <td><input type="number" value="${item.quantidade}" min="1" onchange="atualizarQuantidade(${item.id}, this.value)"></td>
            <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
            <td><button onclick="removerDoCarrinho(${item.id})">Remover</button></td>
        `;
        tabelaCarrinho.appendChild(row);
    });

    const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function atualizarQuantidade(id, quantidade) {
    let produto = carrinho.find(item => item.id === id);
    produto.quantidade = parseInt(quantidade);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    location.reload();
}
