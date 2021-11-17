const readline = require('readline-sync');

const speed = readline.questionFloat('Enter the speed in m/s: ');
const distance = readline.questionFloat('Enter the distance in m: ');

function avgSpeed(speed, distance) {
  return (distance/speed).toFixed(2)
}

console.log(avgSpeed(speed, distance))