function calcularPrecoPicolé(sabor) {
    let preco;

    switch (sabor) {
        case 'Chocolate': 
            preco = 1.50;
            break;
        case 'Morango': 
        case ' Creme': 
            preco = 2.50;
            break;
        case 'Manga': 
            preco = 3.20;
            break;
        case 'Melancia': 
            preco = 3.40;
            break;
        case 'Vanilla Ice': 
            preco = 3.00;
            break;
        case 'Céu Azul': 
            preco = 3.60;
            break;
        case 'Brownie': 
            preco = 4.00;
            break;
        case 'Hawaiano': 
            preco = 5.00;
            break;
        default:
            console.log("Opção de sabor inválida.");
            return; 
    }

    console.log(`O preço do picolé de sabor ${sabor.toUpperCase()} é R$:${preco.toFixed(2)}`);
}

calcularPrecoPicolé('Morango'); 
calcularPrecoPicolé('Brownie'); 
calcularPrecoPicolé('Hawaiano');