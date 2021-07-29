const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResult = (rightAnswers, studentAnswers) => { 
let counter = 0;
for (let index = 0; index < rightAnswers.length; index +=1){
  if  (studentAnswers[index] === rightAnswers[index]){
    counter += 1;
  } else if (studentAnswers[index] === 'N.A'){
    counter += 0;
  } else if (studentAnswers[index] !== rightAnswers[index]){
    counter -= 0.5;
  }
}
return  counter
}     



let hof = (rightAnswers, studentAnswers, checkResult) => {
  return checkResult(rightAnswers, studentAnswers)
}



console.log (hof(rightAnswers, studentAnswers, checkResult))
