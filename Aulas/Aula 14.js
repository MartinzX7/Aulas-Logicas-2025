function linha (){
    console.log('------------------------');
}
linha();
console.log('SESI/SENAI');
linha();

function cabecalho (){
    console.log('-*-*-*-*-*-*-*-*-*-*-*-');
    console.log('       SESI/SENAI');
    console.log('-*-*-*-*-*-*-*-*-*-*-*-');

}
cabecalho();


function cabecalhoEscola (nomeEscola){
   linha()
    console.log(nomeEscola);
   linha()
   

}
cabecalhoEscola('USP');
cabecalhoEscola('SESI')

function soma (n1,n2) {
    let resultado = n1 + n2;
    console.log(resultado);
    
}
soma(5,8)
soma(935346,234568)

//Parametro e retorno
function media (n1,n2) {
    let res = (n1 + n2) / 2;
    return res
}
let valor = media(5,8)              