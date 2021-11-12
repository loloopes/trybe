function nth_prime(n) {
  // Write your code here
  
  let counter = 0;
  let number = 2;
  let array = [];

  function isPrime(num) {

if (num === 2) {
  return true;
} else if (num > 1) {
  for (let i = 2; i < num; i++) {

    if (num % i !== 0) {
      return true;
    } else if (num === i * i) {
      return false
    } else {
      return false;
    }
  }
} else {
  return false;
}

}

while( counter < n ) {
  if (isPrime(number)) {
      array.push(number)
  }
}

return array;
}

console.log(nth_prime(6))