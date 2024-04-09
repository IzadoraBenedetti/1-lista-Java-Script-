function iniciarContagemRegressiva(tempoInicial) {
    let tempoRestante = tempoInicial;


    const interval = setInterval(() => {

        if (tempoRestante > 0) {
            console.log(tempoRestante);
            tempoRestante--;
        } else {
            clearInterval(interval);
            console.log("Lançamento do foguete da Nasa!");
        }
    }, 1000);

}
iniciarContagemRegressiva(5);