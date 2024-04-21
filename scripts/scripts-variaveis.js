// Declarando Var
function decVar() {
    
    var comidaPreferida = "Pizza";


    var declarando = window.document.querySelector("p#decVar");

    declarando.innerHTML = comidaPreferida;
}

// let
function redLet() {
    
    let comidaPreferida = "Pizza";
    comidaPreferida = "Churrasco";

    var novaVar = window.document.querySelector("p#redLet");

    novaVar.innerHTML = comidaPreferida;
}

function redConst() {
    var novaVar = window.document.querySelector("p#redConst");
    var novaVarError = window.document.querySelector("p#redConstError");

    const comidaPreferida = "Pizza";
    novaVar.innerHTML = comidaPreferida;

    novaVarError.innerHTML = "TypeError: Assignment to constant variable.";
}

function undef() {
    var undef = window.document.querySelector("p#undef");
    var sintEr = window.document.querySelector("p#sintEr");

    let comidaPreferida;
    undef.innerHTML = comidaPreferida;

    sintEr.innerHTML = "SyntaxError: Missing initializer in const declaration";
}

