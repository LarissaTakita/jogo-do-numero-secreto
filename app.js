let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Forma usada para adicionar o texto na tag titulo
// let titulo = document.querySelector ('h1')
// titulo.innerHTML = 'Jogo do número secreto'

// Forma usada para adicionar o texto na tag paragrafo
// let paragrafo = document.querySelector ('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'


// Outra forma de adicionar texto na tag do titulo e do paragrado é usando função
function exibirTextoTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// A funçao "exibirTextoTela" cria uma variavel chamada "campo" que irá buscar uma informaçao especifica que está entre (). 
// Ao colocar "campo.innerHTML" ele executa a açao de buscar a informaçao dentro do arquivo do HTML e aplica o valor "texto" a ela.
// Se colocarmos que a informaçao que buscamos é tag e o valor que queremos atribuir é texto (sem aspas pois não é texto) 
// E colocarmos esses termos entre parenteses no nome da função, como "exibirTextoTela (tag, texto)" criamos um parametro para a funçao
// Para por em prática, basta colocar o nome da funçao e os parametro que queremos substituir, conforme abaixo:
function exibirMensagemInicial() {
    exibirTextoTela ('h1', 'Jogo do número secreto');
    exibirTextoTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function botaoChute () {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoTela ('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {
        exibirTextoTela('p', 'O número secreto é menor');
        } else {
        exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

