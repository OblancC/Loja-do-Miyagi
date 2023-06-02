let ITENS_LOJA = [{
        nome: "Bola da Copa",
        preco: 86.30,
        url_img: "./img/bola_copa.webp",
        descricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar",
        favorito: false
    },
    {
        nome: "Carrinho da Hot Wheels",
        preco: 5.80,
        url_img: "./img/carro_hotwheels.jpeg",
        descricao: "Carrinho para dar de presentes para crianças ou colecionar",
        favorito: false
    },
    {
        nome: "Chinelo",
        preco: 19.99,
        url_img: "./img/chinelo.webp",
        descricao: "Chinelo para se utilizar em qualquer lugar",
        favorito: false
    },
    {
        nome: "Escorredor de Louça",
        preco: 15.20,
        url_img: "./img/escorredor_louca.webp",
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios",
        favorito: false
    },
    {
        nome: "Espada Medieval",
        preco: 200.18,
        url_img: "./img/espada_medieval.png",
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração",
        favorito: false
    },
    {
        nome: "Guitarra",
        preco: 1980.99,
        url_img: "./img/guitarra.webp",
        descricao: "Otima para utilizar em bandas de hard rock",
        favorito: false
    },
    {
        nome: "Toalha de Banho",
        preco: 9.99,
        url_img: "./img/toalha_banho.webp",
        descricao: "Boa para se secar apos o banho",
        favorito: false
    },
    {
        nome: "Vinho",
        preco: 59.90,
        url_img: "./img/vinho.webp",
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas ",
        favorito: false
    }
];



function criarCards() {
    const itensSection = document.getElementById('itens_section');
    itensSection.innerHTML = '';

    ITENS_LOJA.forEach((item, i) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imagem = document.createElement('img');
        imagem.src = item.url_img;
        card.appendChild(imagem);

        const nome = document.createElement('h3');
        nome.textContent = item.nome;
        card.appendChild(nome);

        const preco = document.createElement('p');
        item.preco.toFixed(2);
        preco.textContent = `Preço: R$ ${item.preco}`;
        card.appendChild(preco);

        const descricao = document.createElement('p');
        descricao.textContent = item.descricao;
        card.appendChild(descricao);


        const favoritarBtn = document.createElement('button');
        favoritarBtn.textContent = 'Favoritar';
        favoritarBtn.addEventListener('click', () => {
            favoritarProduto(i);
        });
        card.appendChild(favoritarBtn);

        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.addEventListener('click', () => {
            excluirProduto(i);
        });
        card.appendChild(excluirBtn);

        itensSection.appendChild(card);
    });

    const cardAdicionar = document.createElement('div');
    cardAdicionar.classList.add('card');

    const nomeInput = document.createElement('input');
    nomeInput.type = 'text';
    nomeInput.id = 'nome-input';
    nomeInput.placeholder = 'Nome do produto';
    cardAdicionar.appendChild(nomeInput);

    const imagemInput = document.createElement('input');
    imagemInput.type = 'text';
    imagemInput.id = 'imagem-input';
    imagemInput.placeholder = 'URL da imagem';
    cardAdicionar.appendChild(imagemInput);

    imagemInput.addEventListener('input', () => {
        imagemPreview.src = imagemInput.value;
    });

    const precoInput = document.createElement('input');
    precoInput.type = 'number';
    precoInput.id = 'preco-input';
    precoInput.placeholder = 'Preço do produto';
    cardAdicionar.appendChild(precoInput);

    const descricaoInput = document.createElement('textarea');
    descricaoInput.id = 'descricao-input';
    descricaoInput.placeholder = 'Descrição do produto';
    cardAdicionar.appendChild(descricaoInput);

    const adicionarBtn = document.createElement('button');
    adicionarBtn.textContent = 'Adicionar';
    adicionarBtn.addEventListener('click', adicionarProduto);
    cardAdicionar.appendChild(adicionarBtn);

    itensSection.appendChild(cardAdicionar);
}

function adicionarProduto() {
    const nomeInput = document.getElementById('nome-input');
    const imagemInput = document.getElementById('imagem-input');
    const precoInput = document.getElementById('preco-input');
    const descricaoInput = document.getElementById('descricao-input');

    const novoProdutoNome = nomeInput.value;
    const novoProdutoImagem = imagemInput.value;
    const novoProdutoPreco = parseFloat(precoInput.value);
    const novoProdutoDescricao = descricaoInput.value;

    const novoProduto = {
        nome: novoProdutoNome,
        preco: novoProdutoPreco,
        url_img: novoProdutoImagem,
        descricao: novoProdutoDescricao
    };

    ITENS_LOJA.unshift(novoProduto);
    criarCards();

    nomeInput.value = '';
    imagemInput.value = '';
    precoInput.value = '';
    descricaoInput.value = '';
}

function excluirProduto(i) {
    ITENS_LOJA.splice(i, 1);
    criarCards();
}

function favoritarProduto(i) {
    const produtoFavoritado = ITENS_LOJA.splice(i, 1)[0];
    ITENS_LOJA.unshift(produtoFavoritado);
    criarCards();
}

criarCards();