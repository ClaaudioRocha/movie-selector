let escolhido;
function opcaoEscolhida() {
    var select = document.getElementById("escolha");
    escolhido = select.options[select.selectedIndex].text;
}
