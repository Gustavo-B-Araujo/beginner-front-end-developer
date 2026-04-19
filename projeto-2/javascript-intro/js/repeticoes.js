// Estruturas de repetição

// Laço for
let frutas = ['banana', 'maça', 'laranja'];

for(let i=0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


// Forma amigavel de usar o for
for(let fruta of frutas){
    console.log(fruta);
}

// Laço while
let numero = 10
while(numero > 0){
    console.log(numero);
    numero--;
}


let cont = 0;
do{
    console.log(cont)
    cont += 1;
} while(cont < 10)
