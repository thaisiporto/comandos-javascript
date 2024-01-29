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

    if (numVelocidadeC > 80) {
        suaVelocidadeC.style.display = "block";
        suaVelocidadeC.innerHTML = "Você foi multado!";
    } else {
        suaVelocidadeC.style.display = "block";
        suaVelocidadeC.innerHTML = "Você <strong>não</strong> foi multado!";
    }
}

function enviarIdadeA() {
    var idadeA = window.document.querySelector("input#iIdadeA");
    var suaIdadeA = window.document.querySelector("p#condAnin");

    var numIdadeA = Number(idadeA.value);

    if (numIdadeA < 16) {  
        suaIdadeA.style.display = "block";
        suaIdadeA.innerHTML = "Não vota!"  
      } else {  
        if (numIdadeA < 18 || numIdadeA > 65) {
            suaIdadeA.style.display = "block";
            suaIdadeA.innerHTML = "Voto opcional!"
        } else {
            suaIdadeA.style.display = "block";
            suaIdadeA.innerHTML = "Voto obrigatório!"
        }
      }
}
