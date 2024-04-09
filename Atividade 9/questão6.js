
function verificarLetra(letra) {
    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log(letra + ' é uma vogal.');
    }

    else if ((letra >= 'a' && letra <= 'z') && !verificarVogal(letra)) {
        console.log(letra + ' é uma consoante.');
    }

    else {
        console.log('Por favor, digite uma letra que seja do alfabeto.');
    }
}

function verificarVogal(letra) {
    return letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u';
}

let letra = prompt('Digite uma letra do alfabeto:');

verificarLetra(letra);