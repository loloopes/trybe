//exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior=0;
let contImp=0;


for (let i=0; i<numbers.length; i+=1){
    if(numbers[i] % 2 > 0){
        contImp += 1;
    }
}


console.log(contImp);