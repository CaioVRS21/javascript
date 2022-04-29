/*let resultado = (function (x1, x2, operator){

    return eval (`${x1} ${operator} ${x2}`);

})(1, 2, "*");
console.log(resultado);*/ 
//Função anônima acima

/*let calc = (x1, x2, operator) => {
    return eval (`${x1} ${operator} ${x2}`);
}

let resultado = calc(5, 6, "*");

console.log(resultado); */
//Arrow function acima

/*let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));*/
//Como gerar datas

/*let carros = ["Gol", "LatAM", "Azul", "Varig"];

carros.forEach(function(value, index){
    console.log(index, value);
})*/

/*let celular = function(){
    this.cor = "prata"
    this.ligar = function(){
        console.log("Uma ligação");
        return 0;
    }
}*/

//Estrutura de uma classe
class celular{
    constructor(){
        this.cor = "prata";
    }
    ligar(){
        console.log("Uma ligação");
        return 0;
    }
}

let objeto = new celular();

console.log(objeto.cor);
console.log(objeto.ligar());

