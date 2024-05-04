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
   let powNumber1 = window.document.querySelector("input#numberPow1");
   let powNumber2 = window.document.querySelector("input#numberPow2");
   let powNumber = Math.pow(powNumber1.value, powNumber2.value);
   let mathPow = window.document.querySelector("span#mPow");

   mathPow.innerHTML = "&nbsp; &nbsp" + powNumber;
 }

 function mSqrt() {
   let numberSqrt = window.document.querySelector("input#numberSqrt");
   let sqrtNumber = Math.sqrt(numberSqrt.value);
   let mathSqrt = window.document.querySelector("span#mSqrt");
   
   if (Number.isInteger(sqrtNumber)) {
      sqrtNumber = sqrtNumber.toFixed(0);
   } else {
      sqrtNumber = sqrtNumber.toFixed(1);
   }

   mathSqrt.innerHTML = "&nbsp; &nbsp" + sqrtNumber;
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

 function firstDate() {
   let primeiraData = window.document.querySelector("span#firstDate");
   let data1 = new Date();

   primeiraData.innerHTML = `Hoje é <span style="color:#d3a10b; font-size:1em;">${data1}</span>!`;
 }

function secondDate() {
   let segundaData = window.document.querySelector("span#secondDate");
   let numberAno = window.document.querySelector("input#numberAno");
   let numberMes = window.document.querySelector("input#numberMes");
   let numberDia = window.document.querySelector("input#numberDia");
   // Convert
   let data2 = new Date(`${numberAno.value}-${numberMes.value}-${numberDia.value}`)

   segundaData.innerHTML = data2;
 }

 function diaDoMes() {
   let monthDay = window.document.querySelector("p#diaDoMes");
   const data3 = new Date();
   let dia = data3.getDate();

   monthDay.innerHTML = `Hoje é dia <span style="color:#d3a10b; font-size:1em;">${dia}</span>!`;
 }