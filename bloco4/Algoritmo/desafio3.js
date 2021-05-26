let n = 5;
let line = '';
for (let i=0; i < n; i+=1){
    line += ' '
}
for (let j=1; j<(n+1); j+=1){
    line = line.slice(0,-j);
    for (let k=0; k<j; k+=1){
        line += '*';
    }
    console.log(line);
}