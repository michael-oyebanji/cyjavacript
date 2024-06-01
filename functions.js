////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

// CODE HERE

function helloWorld() {
  console.log('Hello, World!');
}
helloWorld();

////////////////// PROBLEM 2 ////////////////////

/*
    Write a function called 'jsPro' that returns the string: 'I am a JavaScript pro!'
*/

//CODE HERE

function jsPro() {
  return 'I am a JavaScript pro!';
}
console.log(jsPro());

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE
function printName(name) {
  console.log(name);
}
printName('Smith');

////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE
function greeting(name) {
  console.log('Hello, ' + name);
}
greeting('Michael');

////////////////// PROBLEM 5 ////////////////////

/*
    Write a function called 'compareNums' that takes in 2 parameters,
    which will be numbers.
    The function should return the bigger number.
    If the numbers are the same, just return the number.

    Brownie points if you use something called a ternary statement (only spend significant
    time on this if you have wiggle room).
*/

//CODE HERE

function compareNums(x, y) {
  const biggerNum = x > y ? x : y;
  return biggerNum
}
console.log(compareNums(2,5));

/*
    The following problems are extreme challenges that will require you to do some additional research.
*/

////////////////// PROBLEM 6 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM
  being the value of the name parameter being passed in).

  Create a variable called 'nameGreeting' and set it equal to your function invoked
  (called) passing in an argument.
    - If you're confused about the instructions here, remember that we can store the
      results (or return) of a function into a variable!
*/

//CODE HERE

function nameCheck(name) {
  if (name == 'Steven') {
    return 'What is up Steven?'
  }
  if (name == 'Bryan') {
    return 'Hey Bryan!'
  }
  return 'Cool name, ' + name;
}

const nameGreeting = nameCheck('Bryan');

////////////////// PROBLEM 7 ////////////////////
const namesArr = ["Cameron", "Riley", "Eric", "Brenna", "Karl"];
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE

function printAllNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
printAllNames(namesArr);

////////////////// PROBLEM 8 ////////////////////
/*
    Write an ARROW FUNCTION called weatherCheck that takes in one parameter called 'weather'.
    If the 'weather' parameter is "sunny", return "What a lovely day!".
    If the 'weather' parameter is "rainy", return "Time for an umbrella.".
    If the 'weather' paraemeter is "snowy", return "Hot chocolate sounds delicious."
    Otherwise, return "Time for a nap."

    You will have to look up arrow functions in JavaScript to complete this task. Arrow
    functions are just another way of writing functions.
*/

const weatherCheck = (weather) => {
  if (weather === 'sunny') {
    return 'What a lovely day!';
  }
  if (weather === 'rainy') {
    return 'Time for an umbrella.';
  }
  if (weather === 'snowy') {
    return 'Hot chocolate sounds delicious.';
  }
  return 'Time for a nap.';
}

console.log(weatherCheck('foggy'));
