//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array = ['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']
let name = array[0];
let index;

function longestName(array){

    for (let i=0; i < array.length; i+=1) {
        for (let j=0; j < array.length; j+=1) {
            if (array[j].length > name.length ) {
                name = array[j];
            } 
        }
    }
    return name;

    
}

console.log(longestName(array));