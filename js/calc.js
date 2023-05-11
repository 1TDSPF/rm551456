function insereNumero(botao,visor) {
    visor.value += botao.value;
}

function resultado(visor) {

    let resultadoOperacao = 0;

    visor.forEach((nr)=> {
        if(nr == "+"){
            resultadoOperacao += parseInt(nr);
        }else if(nr == "-"){
            resultadoOperacao -= parseInt(nr);
        }
        
    });
    console.log(resultadoOperacao);

}