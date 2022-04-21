const fizzBuzz = num => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 15 === 0) console.log('FizzBuzz');
    else if (num[i] % 5 === 0) console.log('Fizz');
    else if (num[i] % 3 === 0) console.log('Buzz');
    else console.log(num[i]);
  }
};