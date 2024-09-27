function comprar() {
    const quantidadeIngressos = parseInt(document.getElementById('qtd').value);
    const tipoIngresso = document.getElementById('tipo-ingresso').value;

    if (!quantidadeIngressos || !tipoIngresso) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Obter a quantidade disponível com base no tipo de ingresso
    let quantidadeDisponivel;
    switch (tipoIngresso) {
        case 'inferior':
            quantidadeDisponivel = parseInt(document.getElementById('qtd-inferior').innerText);
            break;
        case 'superior':
            quantidadeDisponivel = parseInt(document.getElementById('qtd-superior').innerText);
            break;
        case 'pista':
            quantidadeDisponivel = parseInt(document.getElementById('qtd-pista').innerText);
            break;
    }

    // Verificar se a quantidade solicitada não excede a disponível
    if (quantidadeIngressos < 0) {
        alert('Quantidade de ingressos não pode ser negativa.');
        return;
    }
    if (quantidadeIngressos > quantidadeDisponivel) {
        alert('Quantidade solicitada excede a disponível.');
        return;
    }

    // Atualizar a quantidade disponível
    const novaQuantidade = quantidadeDisponivel - quantidadeIngressos;
    switch (tipoIngresso) {
        case 'inferior':
            document.getElementById('qtd-inferior').innerText = novaQuantidade;
            break;
        case 'superior':
            document.getElementById('qtd-superior').innerText = novaQuantidade;
            break;
        case 'pista':
            document.getElementById('qtd-pista').innerText = novaQuantidade;
            break;
    }

    console.log(`Comprados ${quantidadeIngressos} ingressos do tipo ${tipoIngresso}.`);
}

