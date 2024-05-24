function whileRep() {
    let passos = 1;
    while (passos <= 4) {
        let novaTag = document.createElement("span");
        let repeticao = window.document.querySelector("p#whileRep").appendChild(novaTag);

        repeticao.innerHTML = "Passo " + passos + "<br>";
        passos++;
    }
}