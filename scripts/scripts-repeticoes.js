function whileRep() {
    let numeroPasso = 1;
    while (numeroPasso <= 4) {
        let novaTag = document.createElement("span");
        let repeticao = window.document.querySelector("p#whileRep").appendChild(novaTag);

        repeticao.innerHTML = `Passo &nbsp;<strong style="color:#172a3a;">${numeroPasso}</strong><br>`;
        numeroPasso++;
    }
}

function doWhileRep() {
    let numeroPassoFalso = 1;
    do {
        let repeticaoFalsa = window.document.querySelector("p#doWhileRep");
        repeticaoFalsa.innerHTML = `Passo &nbsp;<strong style="color:#172a3a;">${numeroPassoFalso}</strong><br>`;
        numeroPassoFalso++;
    } while (numeroPassoFalso === 0)
}