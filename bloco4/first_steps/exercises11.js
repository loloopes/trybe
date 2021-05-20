let salario= 6000.00;
let inss;
let parcela1 = 142.80; // De R$ 1.903,99 a 2.826,65
let parcela2 = 354.80; // De R$ 2.826,66 a R$ 3.751,05
let parcela3 = 636.13; // De R$ 3.751,06 a R$ 4.664,68
let parcela4 = 869.36; // Acima de R$ 4.664,68

// essa parte desconta o INSS

if (salario < 1556.94){
    inss = salario * 0.08;
} else if (salario >= 1556.94 && salario < 2594.92){
    inss = salario * 0.09;
} else if (salario >= 2594.92 && salario < 5189.82){
    inss = salario * 0.11;
} else if (salario >= 5189.82){
    inss = 570.88;
}

salario = salario - inss;

// essa parte calcula o IR descontado o INSS

if (salario < 1903.99){
    console.log('salario liquido' + salario);
}else if (salario >= 1903.99 && salario < 2826.65){
    let deduc = (salario * 0.075) - 142.80;
    salario = salario - deduc;
    console.log ('salario liquido = ' + salario);
}else if (salario >= 2826.65 && salario < 3751.05){
    let deduc = (salario * 0.15) - 354.80;
    salario = salario - deduc;
    console.log ('salario liquido = ' + salario);
}else if (salario >= 3751.05 && salario < 4664.68){
    let deduc = (salario * 0.225) - 636.13;
    salario = salario - deduc;
    console.log ('salario liquido = ' + salario);
}else if (salario > 4664.68){
    let deduc = (salario * 0.275) - 869.36;
    salario = salario - deduc;
    console.log ('salario liquido = ' + salario);
}