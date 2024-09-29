let listaAmigos = [];

function adicionar () {

    let amigo = document.getElementById('nome-amigo').value;
    listaAmigos.push(amigo);
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = listaAmigos.join(', ');
    
}

function sortear() {
    for (let i = listaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]];
    }
    let sorteio = formaPares(listaAmigos);
    document.getElementById('lista-sorteio').innerHTML = sorteio.join('<br>'); 
}

function reiniciar () {
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