
// Mudar cor do texto
function corTexto() {
    var corDoTexto = window.document.getElementById("corTextoTeste");
    corDoTexto.style.color = "#3a4669";
}
function voltarTextoCor() {
    var voltarCorT = window.document.getElementById("corTextoTeste");
    voltarCorT.style.color = "#c4af11";
}

// No Html
var pTeste = window.document.querySelector("p.cliqueAqui");

function clicar() {
    pTeste.innerText = "Clicou!";
    pTeste.style.background = "#7c9cc7";
}

function dClicar() {
    pTeste.innerText = "Clique aqui!";
    pTeste.style.background = "#fdf5b8";
}

// No Script
var pTeste2 = window.document.querySelector("p#add2");
pTeste2.addEventListener("click", clicando);
pTeste2.addEventListener("dblclick", dClicando);
    function clicando() {
        pTeste2.innerText = "Clicou!";
        pTeste2.style.background = "#fdf5b8";
    }
    function dClicando() {
        pTeste2.innerText = "Clique aqui!";
        pTeste2.style.background = "#7c9cc7";
    }