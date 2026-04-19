// Funções


function somar(x, y) {
    return x + y;
}

let resultado = somar(1, 2);
console.log(resultado);


// Parâmetros opcionais
function multiplicar(x, y=1){
    return x * y
}

resultado = multiplicar(2);
console.log(resultado);


// Multi parâmetros
function somarMuitos(...args){
    let t = 0;

    for(let arg of args){
        t += arg;
    }
    return t;
}

resultado = somarMuitos(1,2,3,4,5);
console.log(resultado);


// Sem parâmetro
function chamarHW(){
    alert('Hello World!')
}