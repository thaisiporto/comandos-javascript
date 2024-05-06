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
   let numberRound1 = window.document.querySelector("input#numberRound1");
   let numberRound2 = window.document.querySelector("input#numberRound2");
   let stringFloatRound = `${numberRound1.value}.${numberRound2.value}`
   let numberFloatRound = Number(stringFloatRound);
   let roundNumber = Math.round(numberFloatRound);
   let mathRound = window.document.querySelector("span#mRound");

   mathRound.innerHTML = "&nbsp; &nbsp" + roundNumber;

   let roundInteiro = window.document.querySelector("span#roundInteiro");
   roundInteiro.innerHTML = numberRound1.value;
   let roundDecimal = window.document.querySelector("span#roundDecimal");
   roundDecimal.innerHTML = numberRound2.value;
}

 function mCeil() {
   let numberCeil1 = window.document.querySelector("input#numberCeil1");
   let numberCeil2 = window.document.querySelector("input#numberCeil2");
   let stringFloatCeil = `${numberCeil1.value}.${numberCeil2.value}`
   let numberFloatCeil = Number(stringFloatCeil);
   let ceilNumber = Math.ceil(numberFloatCeil);
   let mathCeil = window.document.querySelector("span#mCeil");

   mathCeil.innerHTML = "&nbsp; &nbsp" + ceilNumber;

   let ceilInteiro = window.document.querySelector("span#ceilInteiro");
   ceilInteiro.innerHTML = numberCeil1.value;
   let ceilDecimal = window.document.querySelector("span#ceilDecimal");
   ceilDecimal.innerHTML = numberCeil2.value;
 }

 function mFloor() {
   let numberFloor1 = window.document.querySelector("input#numberFloor1");
   let numberFloor2 = window.document.querySelector("input#numberFloor2");
   let stringFloatFloor = `${numberFloor1.value}.${numberFloor2.value}`
   let numberFloatFloor = Number(stringFloatFloor);
   let floorNumber = Math.floor(numberFloatFloor);
   let mathFloor = window.document.querySelector("span#mFloor");

   mathFloor.innerHTML = "&nbsp; &nbsp" + floorNumber;

   let floorInteiro = window.document.querySelector("span#floorInteiro");
   floorInteiro.innerHTML = numberFloor1.value;
   let floorDecimal = window.document.querySelector("span#floorDecimal");
   floorDecimal.innerHTML = numberFloor2.value;
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
      sqrtNumber = sqrtNumber.toFixed(2);
   }

   mathSqrt.innerHTML = "&nbsp; &nbsp" + sqrtNumber;
 }

 function mRandom() {
    let randomNumber = Math.random().toFixed(5);
    let mathRandom = window.document.querySelector("span#mRandom");

    mathRandom.innerHTML = "&nbsp; &nbsp" + randomNumber;
 }


 function mRandomInteiro() {
    let randomIntegerNumber = Math.ceil(Math.random() * 10);
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
   let numberAno = window.document.querySelector("span#numberAno");
   let numberMes = window.document.querySelector("span#numberMes");
   let numberDia = window.document.querySelector("span#numberDia");
   var idata = window.document.querySelector("input#idata");

   // Convert
   let data2 = new Date(idata.value)
   segundaData.innerHTML = data2;

   let ano = data2.getFullYear();
   let mes = data2.getMonth()+1;
   let dia = data2.getDate()+1;
   numberAno.innerHTML = `<span style="color:#D94C1A;"><strong>${ano}</strong></span>`;
   numberMes.innerHTML = `<span style="color:#D94C1A;"><strong>${mes}</strong></span>`;
   numberDia.innerHTML = `<span style="color:#D94C1A;"><strong>${dia}</strong></span>`;
 }

 function diaDoMes() {
   let monthDay = window.document.querySelector("p#diaDoMes");
   const data3 = new Date();
   let dia = data3.getDate();

   monthDay.innerHTML = `Hoje é dia <span style="color:#d3a10b;">${dia}</span>!`;
}

//DIAS DA SEMANA
let weekDay = window.document.querySelector("p#diaDaSemana");
var nomeDay = window.document.querySelector("p#nomeDia");

var data4 = new Date();
var diaSemana = data4.getDay();

function diaDaSemana() {
   weekDay.innerHTML = `Hoje é <span style="color:#d3a10b;">${diaSemana}</span>!`;
}

function nomeDia() {
   switch(diaSemana) {
      case 0:
         var nomeDoDia = "Domingo";
         break
      case 1:
         var nomeDoDia = "Segunda-Feira";
         break
      case 2:
         var nomeDoDia = "Terça-Feira";
         break
      case 3:
         var nomeDoDia = "Quarta-Feira";
         break
      case 4:
         var nomeDoDia = "Quinta-Feira";
         break
      case 5:
         var nomeDoDia = "Sexta-Feira";Da
         break
      case 6:
         var nomeDoDia = "Sábado";
         break
   }
  nomeDay.innerHTML = `Hoje é <span style="color:#d3a10b;">${nomeDoDia}</span>!`;
}


