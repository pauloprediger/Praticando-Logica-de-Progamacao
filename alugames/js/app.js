let jogosAlugados = 0;
function alterarStatus(id) {
    const item = document.getElementById(`game-${id}`);
    const imgDiv = item.querySelector('.dashboard__item__img');
    const button = item.querySelector('.dashboard__item__button');

    if (button.classList.contains('dashboard__item__button--return')) {
        const confirmReturn = confirm('Você tem certeza que deseja devolver este jogo?');
        if (!confirmReturn) {
            return;
        }else {
            jogosAlugados++;
        }
    }

    imgDiv.classList.toggle('dashboard__item__img--rented');
    button.classList.toggle('dashboard__item__button--return');

    if (button.classList.contains('dashboard__item__button--return')) {
        button.textContent = 'Devolver';
    } else {
        button.textContent = 'Alugar';
    }
    mostrarQuantidadeAlugados();
}

function mostrarQuantidadeAlugados() {
    console.log(`O total de jogos alugados é ${jogosAlugados}`);
}