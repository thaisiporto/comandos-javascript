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