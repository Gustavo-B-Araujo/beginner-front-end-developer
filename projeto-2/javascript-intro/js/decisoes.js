/*
Condicionais

Operadores:
    > maior
    < menor
    >= maior ou igual
    <= menor ou igual
    != diferente
    == igual
    && and
    || or
*/

if(10 > 5) {
    console.log('10 é maior que 5');
}


if (5 > 100) {
    console.log(true);
}
else {
    console.log(false);
}


if(idade <= 12){
    console.log('Criança');
}
else if(idade <= 17){
    console.log('Adolescente');
}
else{
    console.log('Adulto');
}


// Cases
let jogar = 'Zelda'
switch(jogar) {
    case 'Zelda':
        console.log('Jogando Zelda no Nintendo');
        break;
    case 'The Last of Us':
        console.log('Jogando The Last of Us II no PlayStation');
        break;
    default:
        console.log('Jogando qualquer coisa chata.');
}