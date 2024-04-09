
function ordemDecrescente(a, b) {
    return b - a;
}


function ordenarValoresDecrescente() {
    
    let valores = [];

    for (let i = 1; i <= 4; i++) {
        let valor = parseInt(prompt("Insira o " + i + " O valor inteiro:"));
        valores.push(valor);
    }

    
    valores.sort(ordemDecrescente);

   
    console.log("Valores em ordem decrescente:");
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
}


ordenarValoresDecrescente();