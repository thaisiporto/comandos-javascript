// Soma
function somar() {
    var numSoma1 = window.document.querySelector("input#iSoma1");
    var numSoma2 = window.document.querySelector("input#iSoma2");
    var resultadoSoma = window.document.querySelector("p#resSoma");

    var soma1 = Number(numSoma1.value);
    var soma2 = Number(numSoma2.value);

    var soma = soma1 + soma2;

    resultadoSoma.innerHTML = `${soma1} + ${soma2} é igual a <strong>${soma}</strong>`;
}

// Subtração
function subtrair() {
    var numSub1 = window.document.querySelector("input#iNumbSub1");
    var numSub2 = window.document.querySelector("input#iNumbSub2");
    var resultadoSub = window.document.querySelector("p#resSubtracao");

    var sub1 = Number(numSub1.value);
    var sub2 = Number(numSub2.value);

    var subtracao = sub1 - sub2;

    resultadoSub.innerHTML = `${sub1} - ${sub2} é igual a <strong>${subtracao}</strong>`;
}

// Mulitplicação
function multiplicar() {
    var numMult1 = window.document.querySelector("input#iNumbMult1");
    var numMult2 = window.document.querySelector("input#iNumbMult2");
    var resultadoMult = window.document.querySelector("p#resMultiplicacao");

    var mult1 = Number(numMult1.value);
    var mult2 = Number(numMult2.value);

    var multiplicacao = mult1 * mult2;

    resultadoMult.innerHTML = `${mult1} x ${mult2} é igual a <strong>${multiplicacao}</strong>`;
}

// Divisão
function dividir() {
    var numDiv1 = window.document.querySelector("input#iNumbDiv1");
    var numDiv2 = window.document.querySelector("input#iNumbDiv2");
    var resultadoDiv = window.document.querySelector("p#resDivisão");

    var div1 = Number(numDiv1.value);
    var div2 = Number(numDiv2.value);

    var multiplicacao = div1 / div2;

    resultadoDiv.innerHTML = `${div1} &#247; ${div2} é igual a <strong>${multiplicacao.toFixed(2).replace('.', ',')}</strong>`;
}

// Conversão para String

function somarSemConvert() {
    var semConvert1 = window.document.querySelector("input#iNConvert1");
    var semConvert2 = window.document.querySelector("input#iNConvert2");
    var resultadoSC = window.document.querySelector("p#resNConvert");

    var convertStrin1 = String(semConvert1.value);
    var convertStrin2 = String(semConvert2.value);

    var somaSC = convertStrin1 + convertStrin2;

    resultadoSC.innerHTML = `${convertStrin1} + ${convertStrin2} é igual a <strong>${somaSC}</strong>`;
}

// Conversão para Número

function somar2() {
    var numSoma12 = window.document.querySelector("input#iSoma12");
    var numSoma22 = window.document.querySelector("input#iSoma22");
    var resultadoSoma2 = window.document.querySelector("p#resSoma2");

    var soma12 = Number(numSoma12.value);
    var soma22 = Number(numSoma22.value);

    var soma2 = soma12 + soma22;

    resultadoSoma2.innerHTML = `${soma12} + ${soma22} é igual a <strong>${soma2}</strong>`;
}