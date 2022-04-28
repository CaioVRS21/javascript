let semaforo = "amarelo"
let pedestre = true

/*if (semaforo == 'verde' && pedestre == 'passando'){
    console.log('Siga após o pedestre atravessar');
} else{
    console.log('Pare!');
}*/

switch (semaforo){
    case "verde":
        console.log('Siga');
    break;    
    case "amarelo":
        console.log('cuidado');
    break;
    case "vermelho":
        console.log('Pare!');
    break;
    default:
        console.log('Não sei')        
}