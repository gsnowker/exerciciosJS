let filaClientes = [];

function adicionarCliente(nome) {
    filaClientes.push(nome);
    console.log(`${nome} entrou na fila.`);
}

function atenderCliente() {
    if (filaClientes.length === 0) {
        console.log("A fila está vazia. Ninguém para atender.");
    } else {
        let clienteAtendido = filaClientes.shift();
        console.log(`${clienteAtendido} foi atendido e saiu da fila.`);
    }
}

adicionarCliente("Ana");
adicionarCliente("Bruno");
adicionarCliente("Carla");

console.log("Fila atual:", filaClientes);

atenderCliente();
atenderCliente();

console.log("Fila após atendimentos:", filaClientes);

adicionarCliente("Daniel");

console.log("Fila final:", filaClientes);
