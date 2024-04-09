function calcularGanhoAnual(ganhosMensais) {
    return ganhosMensais.reduce((total, ganho) => total + ganho, 0);
}


function calcularGastosAnuais(gastosMensais) {
    return gastosMensais.reduce((total, gasto) => total + gasto, 0);
}


function calcularLucroPrejuizo(ganhoAnual, gastoAnual) {
    if (ganhoAnual > gastoAnual) {
        return "A empresa teve lucro.";
    } else if (ganhoAnual < gastoAnual) {
        return "A empresa teve prejuízo.";
    } else {
        return "A empresa não teve lucro nem prejuízo.";
    }
}


function calcularFinancasAnuais() {
    const ganhosMensais = [];
    const gastosMensais = [];

 
    for (let i = 0; i < 12; i++) {
        let ganho = parseFloat(prompt(`Informe o seu ganho bruto do mês ${i + 1}:`));
        let gasto = parseFloat(prompt(`Informe os seus gastos do mês ${i + 1}:`));

        ganhosMensais.push(ganho);
        gastosMensais.push(gasto);
    }

    const ganhoAnual = calcularGanhoAnual(ganhosMensais);

   
    const gastoAnual = calcularGastosAnuais(gastosMensais);

  
    const saldoFinanceiro = ganhoAnual - gastoAnual;

  
    const resultado = calcularLucroPrejuizo(ganhoAnual, gastoAnual);

    
    console.log(`Ganho bruto anual: R$ ${ganhoAnual.toFixed(2)}`);
    console.log(`Gastos anuais: R$ ${gastoAnual.toFixed(2)}`);
    console.log(`Saldo financeiro: R$ ${saldoFinanceiro.toFixed(2)}`);
    console.log(resultado);
    
}


calcularFinancasAnuais();