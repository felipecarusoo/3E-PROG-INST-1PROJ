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

})