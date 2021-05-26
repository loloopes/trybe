//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3]
let number = array[0];
let index;

function largestValue(array){

    for (let i=0; i < array.length; i+=1) {
        for (let j=0; j < array.length; j+=1) {
            if (array[j] < number ) {
                number = array[j];
                index = j;
            } 
        }
    }
    return index;

    
}

console.log(largestValue(array));