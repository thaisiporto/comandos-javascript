function pizSal() {
    let pizza = {  
        sabor: "calabresa",  
        tamanho:"grande",  
        borda: "catupiry"  
    };
    let pedido = window.document.querySelector("p#pizzaSalgada")

    pedido.innerHTML = `Gostaria de pedir uma pizza <u>${pizza.tamanho}</u> de <u>${pizza.sabor}</u> com borda de <u>${pizza.borda}</u>.`
}

function pizDoc() {
    let pizza = new Object();  
    pizza.sabor = "brigadeiro";  
    pizza.tamanho = "broto";  
    pizza.borda = "doce de leite";

    let pedido2 = window.document.querySelector("p#pizzaDoce")

    pedido2.innerHTML = `E também uma <u>${pizza["tamanho"]}</u> de <u>${pizza["sabor"]}</u> com borda de <u>${pizza["borda"]}</u>.`
 }

 function pizzaPedido() {
    let pizza = {
        sabor: "calabresa",
        tamanho: "grande",
        borda: "catupiry",
        fazerPedido: function() {
            return "Olá! Quero pedir uma pizza de " + "<u>" + pizza.sabor + "</u>" + "."
        }
    }

    let pedido3 = window.document.querySelector("p#pizzaPedido");
        
    pedido3.innerHTML = pizza.fazerPedido();        
 }

 // MATH

 function mRound() {
    let roundNumber = Math.round(9.7);
    let mathRound = window.document.querySelector("span#mRound");

    mathRound.innerHTML = "&nbsp; &nbsp" + roundNumber;
 }

 function mCeil() {
    let ceilNumber = Math.ceil(9.1);
    let mathCeil = window.document.querySelector("span#mCeil");

    mathCeil.innerHTML = "&nbsp; &nbsp" + ceilNumber;
 }

 function mFloor() {
    let floorNumber = Math.floor(10.1);
    let mathFloor = window.document.querySelector("span#mFloor");

    mathFloor.innerHTML = "&nbsp; &nbsp" + floorNumber;
 }

 function mPow() {
    let powNumber = Math.pow(5, 2);
    let mathPow = window.document.querySelector("span#mPow");

    mathPow.innerHTML = "&nbsp; &nbsp" + powNumber;
 }

 function mSqrt() {
    let numberSqrt = window.document.querySelector("input#numberSqrt");
    let sqrtNumber = Math.sqrt(numberSqrt.value);
    let mathSqrt = window.document.querySelector("span#mSqrt");

    mathSqrt.innerHTML = "&nbsp; &nbsp" + sqrtNumber.toFixed(2);
 }

 function mRandom() {
    let randomNumber = Math.random().toFixed(5);
    let mathRandom = window.document.querySelector("span#mRandom");

    mathRandom.innerHTML = "&nbsp; &nbsp" + randomNumber;
 }


 function mRandomInteiro() {
    let randomIntegerNumber = Math.round(Math.random() * 10) + 1;
    let mathRandomInteiro = window.document.querySelector("span#mRandomInteiro");

    mathRandomInteiro.innerHTML = "&nbsp; &nbsp" + randomIntegerNumber;
 }