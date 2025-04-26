Problem 1
function createCounter() {
  let count = 0;

  function incrementCounter() {
    count++;
    return count;
  }

  return incrementCounter;
}

const counterA = createCounter();
console.log(counterA()); // Expected: 1, Actual: ?
console.log(counterA()); // Expected: 2, Actual: ?

const counterB = createCounter();
console.log(counterB()); // Expected: 1 (independent counter), Actual: ?

What will be the output of the console.log statements? Will counterA and counterB maintain independent counts? Run this code and see what happens.
A:The outputs of the console.log Statements are  same as excepted outputs.yes counter a and counter b maintaine independent counts.
