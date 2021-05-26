//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


let array = [2, 3, 2, 5, 8, 2, 3]
let contador=0;

function repeatMost(array){

    for (let i=0; i < array.length; i+=1) {
        for (let j=1; j < array.length; j+=1) {
            if (array[j] = array[i]) {
                contador += 1;
            } 
        }
    }
    return contador;

    
}

console.log(repeatMost(array));