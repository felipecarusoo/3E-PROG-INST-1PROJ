document.addEventListener('DOMContentLoaded', function (){
let tamanhoAtualFonte = 1;
const aumentaFonteBotao = document.getElementById('aumentar-fonte');

aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
})
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
})

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
})

const alternaContraste = document.getElementById('alterna-contraste')

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})