let listaAmigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim();

    // Validação: não permitir adicionar vazio
    if (amigo === '') {
        alert('O nome não pode ser vazio.');
        return;
    }

    // Validação: não permitir nomes duplicados
    if (listaAmigos.includes(amigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    listaAmigos.push(amigo);
    document.getElementById('nome-amigo').value = '';
    renderizarLista();
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    renderizarLista();
}

function renderizarLista() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = listaAmigos.map((amigo, index) => 
        `<span onclick="removerAmigo(${index})">${amigo}</span>`
    ).join(', ');
}

function sortear() {
    // Validação: não permitir sorteio com menos de 3 participantes
    if (listaAmigos.length < 3) {
        alert('É necessário pelo menos 3 participantes para sortear.');
        return;
    }

    for (let i = listaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]];
    }
    let sorteio = formaPares(listaAmigos);
    document.getElementById('lista-sorteio').innerHTML = sorteio.join('<br>'); 
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    console.log(listaAmigos);
}

function formaPares(arrayAmigos) {
    let pares = [];
    for (let i = 0; i < arrayAmigos.length; i++) {
        let proximoIndice = (i + 1) % arrayAmigos.length;
        pares.push(`${arrayAmigos[i]} &rarr; ${arrayAmigos[proximoIndice]}`);
    }
    return pares;
}

renderizarLista();