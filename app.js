const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');

    const amigo = input.value.trim();

    if (amigo === '') {
        alert('Você não inseriu um nome!');
        return;
    }

    listaAmigos.push(amigo);
    AtualizarLista();
    input.value = '';
    input.focus();
}

function AtualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach(function(amigo, i) {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('A lista precisa ter, pelo menos, 2 amigos.');
        return;
    }

    const randomizar = Math.floor(Math.random() * listaAmigos.length);
    
    const sorteado = listaAmigos[randomizar];

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '<li> Sorteado: <strong>' + sorteado + '</strong></li>';
}