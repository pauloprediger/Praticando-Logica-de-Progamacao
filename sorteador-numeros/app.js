
function sortear () {
    const inputQuantidadeDeNumeros = document.getElementById('quantidade')
    const inputNumeroInicial = document.getElementById('de');
    const inputNumeroFinal = document.getElementById('ate');
    const inputResultado = document.getElementById('resultado').querySelector('label');
    const btnReiniciar = document.getElementById('btn-reiniciar');


    const quantidadeDeNumeros = parseInt(inputQuantidadeDeNumeros.value);
    let de = parseInt(inputNumeroInicial.value);
    let ate = parseInt(inputNumeroFinal.value);

    if (quantidadeDeNumeros <= 0) {
       inputResultado.textContent = 'Quantidade de números inválida';
       return;
    }
    if (de > ate) {
        [de, ate] = [ate, de];
    }

    const resultado = [];

    for (i = 1; i <= quantidadeDeNumeros; i++){
        let numeroAleatorio = Math.floor(Math.random() * (ate - de + 1)) + de;
        resultado.push(numeroAleatorio);
    }

    inputResultado.textContent = 'Números sorteados: ' + resultado.join(', ');
    /*btnReiniciar.classList.remove('container__botao-desabilitado');
    btnReiniciar.classList.add('container__botao');*/
    trocaClasseBotao(btnReiniciar, 'container__botao-desabilitado', 'container__botao');
}

function reiniciar () {
    let inputQuantidadeDeNumeros = document.getElementById('quantidade')
    let inputNumeroInicial = document.getElementById('de');
    let inputNumeroFinal = document.getElementById('ate');
    let inputResultado = document.getElementById('resultado').querySelector
    ('label');
    let btnReiniciar = document.getElementById('btn-reiniciar');


    inputQuantidadeDeNumeros.value = '';
    inputNumeroInicial.value = '';
    inputNumeroFinal.value = '';
    inputResultado.textContent = 'Números sorteados: nenhum número sorteado ainda';

    trocaClasseBotao(btnReiniciar, 'container__botao', 'container__botao-desabilitado');
}

function trocaClasseBotao (botao, classeAntiga, classeNova) {
    botao.classList.remove(classeAntiga);
    botao.classList.add(classeNova);
}