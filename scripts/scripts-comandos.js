
// Janela de Alerta
function alerta() {
    window.alert("Essa é uma mensagem de Alerta!");
}

// Janela de Confirmação
function confirma() {
    window.confirm("Essa é uma mensagem de Confirmação!");
}

// Janela de Prompt
function entradaTexto() {
    var nome = window.prompt("Qual é seu nome?");
    var resultado = window.document.querySelector("p#promptTeste");

    resultado.style.display = "block";
    resultado.innerText = `Olá, ${nome}!`;

}

// Mudar cor do texto
function corTexto() {
    var corDoTexto = window.document.getElementById("corTextoTeste");
    corDoTexto.style.color = "#D94C1A";
}
function voltarTextoCor() {
    var voltarCorT = window.document.getElementById("corTextoTeste");
    voltarCorT.style.color = "#172a3a";
}

// Mudar cor do fundo
function corFundo() {
    var corDoFundo = window.document.getElementById("corFundoTeste");
    corDoFundo.style.background = "#F2BE24";
}
function voltarFundo() {
    var voltarCorF = window.document.getElementById("corFundoTeste");
    voltarCorF.style.background = "#d2d9e2";
}

// Mudar o texto 
function mudarTexto() {
    var textoMudando = window.document.getElementById("mudandoTexto");
    textoMudando.innerText = "Mudou!";
}
function voltarTexto() {
    var textoVoltando = window.document.getElementById("mudandoTexto");
    textoVoltando.innerText = "Esse texto vai mudar!"
}

// Mudar para maiúsculo ou minúsculo
function maius() {
    let bigCase = window.document.getElementById("maiusMinus").innerText;
    window.document.getElementById("maiusMinus").innerText = bigCase.toUpperCase();
}
function minus() {
    var smallCase = window.document.getElementById("maiusMinus");
    window.document.getElementById("maiusMinus").innerText = smallCase.toLowerCase();
}
function textoNormal() {
    var normalCase = window.document.getElementById("maiusMinus");
    normalCase.innerHTML = "Esse Texto Vai Se Transformar!"
}

// Contar caracteres
function contarLetras () {
    let palavra = window.document.getElementById("iTextoTamanho").value;
    let letras = palavra.trim().length;

    window.document.getElementById("letrasContadas").innerHTML = `O texto ${palavra} tem ${letras} letras.`;
}

// Contar caracteres
function repeatButton () {
    let palavra = window.document.querySelector("input#repeatInput").value + " ";
    let repetindo3x = palavra.repeat(3);

    window.document.querySelector("p#repeatText").innerHTML = repetindo3x;
}