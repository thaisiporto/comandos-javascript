function enviarVelocidade() {
    var velocidade = window.document.querySelector("input#iVelocidade");
    var suaVelocidade = window.document.querySelector("p#hideTeste");

    var numVelocidade = Number(velocidade.value);

    if (numVelocidade > 80) {
        suaVelocidade.style.display = "block";
        suaVelocidade.innerHTML = "Você foi multado!";
    } else {
        suaVelocidade.style.display = "none";
    }
}