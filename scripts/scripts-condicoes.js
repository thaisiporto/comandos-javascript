function enviarVelocidadeS() {
    var velocidadeS = window.document.querySelector("input#iVelocidadeS");
    var suaVelocidadeS = window.document.querySelector("p#condSimp");

    var numVelocidadeS = Number(velocidadeS.value);

    if (numVelocidadeS > 80) {
        suaVelocidadeS.style.display = "block";
        suaVelocidadeS.innerHTML = "Você foi multado!";
    } else {
        suaVelocidadeS.style.display = "none";
    }
}

function enviarVelocidadeC() {
    var velocidadeC = window.document.querySelector("input#iVelocidadeC");
    var suaVelocidadeC = window.document.querySelector("p#condComp");

    var numVelocidadeC = Number(velocidadeC.value);

    suaVelocidadeC.style.display = "block";
    if (numVelocidadeC > 80) {

        suaVelocidadeC.innerHTML = "Você foi multado!";
    } else {
        suaVelocidadeC.innerHTML = "Você <strong>não</strong> foi multado!";
    }
}

function enviarIdadeA() {
    var idadeA = window.document.querySelector("input#iIdadeA");
    var suaIdadeA = window.document.querySelector("p#condAnin");

    var numIdadeA = Number(idadeA.value);
    suaIdadeA.style.display = "block";

    if (numIdadeA < 16) {  
        suaIdadeA.innerHTML = "Não vota!"  
      } else {  
        if (numIdadeA < 18 || numIdadeA > 65) {
            suaIdadeA.innerHTML = "Voto opcional!"
        } else {
            suaIdadeA.innerHTML = "Voto obrigatório!"
        }
      }
}

function enviarMesM() {
    var mes = document.getElementById("iMes");
    var seuMesM = window.document.querySelector("p#condMult");

    var mesText = String(mes.value);
    seuMesM.style.display = "block";

    switch (mesText) {
        case "Fevereiro":
            seuMesM.innerHTML = `O mês de ${mesText} tem 28 dias em anos comuns e 29 dias em anos bissextos!`;
        break
        case "Abril":
            seuMesM.innerText = `O mês de ${mesText} tem 30 dias!`;
        break
        case "Junho":
            seuMesM.innerText = `O mês de ${mesText} tem 30 dias!`;
        break
        case "Setembro":
            seuMesM.innerText = `O mês de ${mesText} tem 30 dias!`;
        break
        case "Novembro":
            seuMesM.innerText = `O mês de ${mesText} tem 30 dias!`;
        break
        default:
            seuMesM.innerHTML = `O mês de ${mesText} tem 31 dias!`;
    }

}