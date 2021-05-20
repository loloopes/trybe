let custo = 7;
let venda = 20;
let imposto = custo*0.2;
let lucro;
let custoTotal;

if (custo <=0 || venda <= 0){
    console.log('erro, custo ou venda <= 0, invalido');
} else {
    custoTotal = custo + imposto;
    lucro = venda - custoTotal;
    console.log(lucro);
}