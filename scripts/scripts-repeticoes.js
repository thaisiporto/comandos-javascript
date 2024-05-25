function seqRep() {
    let novaTagSeq = document.createElement("span");
    let repeticaoSeq = window.document.querySelector("p#seqRep").appendChild(novaTagSeq);

    repeticaoSeq.innerHTML += `Erro&nbsp;<strong style="color:#172a3a;"> 1</strong><br>`;
    repeticaoSeq.innerHTML += `Erro&nbsp;<strong style="color:#172a3a;"> 2</strong><br>`;
    repeticaoSeq.innerHTML += `Erro&nbsp;<strong style="color:#172a3a;"> 3</strong><br>`;
    repeticaoSeq.innerHTML += `Erro&nbsp;<strong style="color:#172a3a;"> 4</strong><br>`;
}

function whileRep() {
    let numeroPassoWhile = 1;
    while (numeroPassoWhile <= 4) {
        let novaTagWhile = document.createElement("span");
        let repeticaoWhile = window.document.querySelector("p#whileRep").appendChild(novaTagWhile);

        repeticaoWhile.innerHTML = `Passo &nbsp;<strong style="color:#172a3a;">${numeroPassoWhile}</strong><br>`;
        numeroPassoWhile++;
    }
}

function doWhileRep() {
    let numeroTarefaDo = 1;
    do {
        let repeticaoDo = window.document.querySelector("p#doWhileRep");
        repeticaoDo.innerHTML = `Tarefa &nbsp;<strong style="color:#172a3a;">${numeroTarefaDo}</strong><br>`;
        numeroTarefaDo++;
    } while (numeroTarefaDo === 0)
}

function forRep() {
    for (let numeroMissaoFor = 1; numeroMissaoFor <= 4; numeroMissaoFor++) {
        let novaTagFor = document.createElement("span");
        let repeticaoFor = window.document.querySelector("p#forRep").appendChild(novaTagFor);

        repeticaoFor.innerHTML = `Missão &nbsp;<strong style="color:#172a3a;">${numeroMissaoFor}</strong><br>`;
    }
}