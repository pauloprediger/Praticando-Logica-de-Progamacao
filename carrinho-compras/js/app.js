// Array para armazenar os produtos adicionados
let produtos = [];

function adicionar() {
  // Pegando os elementos necessários
  const produtoSelect = document.getElementById('produto');
  const quantidadeInput = document.getElementById('quantidade');

  // Pegando os valores dos elementos
  const produtoSelecionado = produtoSelect.value;
  const quantidade = parseInt(quantidadeInput.value, 10);

  // Verificando se a quantidade é um número válido
  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, insira uma quantidade válida.');
    console.log('Quantidade inválida:', quantidadeInput.value);
    return;
  }

  // Extraindo o preço do produto selecionado
  const valorProduto = produtoSelecionado.split(' - R$')[1];
  const precoProduto = parseFloat(valorProduto.replace(',', '.'));

  // Verificando se o preço do produto é um número válido
  if (isNaN(precoProduto)) {
    alert('Erro ao obter o preço do produto.');
    console.log('Preço inválido:', valorProduto);
    return;
  }

  // Verificando se o produto já existe no carrinho
  const produtoExistente = produtos.find(prod => prod.descricao === produtoSelecionado.split(' - R$')[0]);

  if (produtoExistente) {
    // Atualizando a quantidade e o preço do produto existente
    produtoExistente.quantidade += quantidade;
  } else {
    // Criando o objeto produto
    const produto = {
      descricao: produtoSelecionado.split(' - R$')[0],
      preco: precoProduto,
      quantidade: quantidade
    };

    // Adicionando o produto ao array de produtos
    produtos.push(produto);
  }

  // Atualizando a exibição dos produtos no carrinho
  atualizarCarrinho();

  // Limpando o campo da quantidade
  quantidadeInput.value = '';
}

function atualizarCarrinho() {
  const listaProdutos = document.getElementById('lista-produtos');
  const valorTotal = document.getElementById('valor-total');

  // Limpando a lista de produtos exibida
  listaProdutos.innerHTML = '';

  // Variável para calcular o valor total
  let total = 0;

  // Iterando sobre os produtos e atualizando a exibição
  produtos.forEach(produto => {
    total += produto.preco * produto.quantidade;

    const novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${produto.quantidade}x</span> ${produto.descricao} <span class="texto-azul">R$${produto.preco.toFixed(2).replace('.', ',')}</span>`;
    listaProdutos.appendChild(novoProduto);
  });

  // Atualizando o valor total
  valorTotal.innerText = `R$${total.toFixed(2).replace('.', ',')}`;
}

function limpar() {
    // Resetando o array de produtos
    produtos = [];
  
    // Limpando a exibição dos produtos no carrinho
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';
  
    // Resetando o valor total
    const valorTotal = document.getElementById('valor-total');
    valorTotal.innerText = 'R$';
  }