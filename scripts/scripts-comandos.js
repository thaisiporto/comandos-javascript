
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
    window.document.getElementById("promptTeste").innerText = `Olá, ${nome}!`;
}

// Mudar cor do texto
function corTexto() {
    var corDoTexto = window.document.getElementById("corTextoTeste");
    corDoTexto.style.color = "#3a4669";
}
function voltarTextoCor() {
    var voltarCorT = window.document.getElementById("corTextoTeste");
    voltarCorT.style.color = "#e6687d";
}

// Mudar cor do fundo
function corFundo() {
    var corDoFundo = window.document.getElementById("corFundoTeste");
    corDoFundo.style.background = "#3a4669";
}
function voltarFundo() {
    var voltarCorF = window.document.getElementById("corFundoTeste");
    voltarCorF.style.background = "#eee";
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
    var bigCase = window.document.getElementById("maiusMinus").innerText;
    window.document.getElementById("maiusMinus").innerText = bigCase.toUpperCase();
}
function minus() {
    var smallCase = window.document.getElementById("maiusMinus").innerText;
    window.document.getElementById("maiusMinus").innerText = smallCase.toLowerCase();
}
function textoNormal() {
    var normalCase = window.document.getElementById("maiusMinus").innerText;
    window.document.getElementById("maiusMinus").innerText = "Esse Texto Vai Mudar!"
}

// Contar caracteres
function contarLetras () {
    var palavra = window.document.getElementById("iTextoTamanho").value;
    var semEspaco = palavra.replace(/ /g,"");
    var letras = semEspaco.length;

    window.document.getElementById("letrasContadas").innerText = `O texto ${palavra} tem ${letras} letras.`;
}
