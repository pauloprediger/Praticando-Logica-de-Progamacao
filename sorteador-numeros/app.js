function gerarNumeroAleatorio (min, max, numerosSorteados) {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numerosSorteados.includes(numeroAleatorio));
    return numeroAleatorio;
}

function sortear () {
    const inputQuantidadeDeNumeros = document.getElementById('quantidade')
    const inputNumeroInicial = document.getElementById('de');
    const inputNumeroFinal = document.getElementById('ate');
    const inputResultado = document.getElementById('resultado').querySelector('label');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const resultado = [];


    const quantidadeDeNumeros = parseInt(inputQuantidadeDeNumeros.value);
    let de = parseInt(inputNumeroInicial.value);
    let ate = parseInt(inputNumeroFinal.value);
    let dif = ate - de + 1;

    if (quantidadeDeNumeros <= 0 || quantidadeDeNumeros > dif) {
       inputResultado.textContent = 'Quantidade de números inválida';
       return;
    }
    if (de > ate) {
        [de, ate] = [ate, de];
    }

    for (i = 0; i < quantidadeDeNumeros; i++) {
        let numeroAleatorio = gerarNumeroAleatorio(de, ate, resultado);
        resultado.push(numeroAleatorio);
    }

    inputResultado.textContent = 'Números sorteados: ' + resultado.join(', ');
    trocaClasseBotao(btnReiniciar, 'container__botao-desabilitado', 'container__botao');
}

function reiniciar () {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').querySelector('label').textContent = 'Números sorteados: nenhum número sorteado ainda';
    let btnReiniciar = document.getElementById('btn-reiniciar');
    trocaClasseBotao(btnReiniciar, 'container__botao', 'container__botao-desabilitado');
}

function trocaClasseBotao (botao, classeAntiga, classeNova) {
    botao.classList.remove(classeAntiga);
    botao.classList.add(classeNova);
}