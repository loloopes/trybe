//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function finalEnd(string){
    for(let i=0; i < string.length; i+=1){
        let lastLetter = string[string.length -i -1];
        if (lastLetter != string[string.lenght -i -1]) {
            return false
        }
    }
    return true
}   

console.log(finalEnd('arara'))