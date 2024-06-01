/*
    Welcome to your introduction to Functions!

    This file is a brief walkthrough on how functions work. Feel free to read along, and
    comment in (remove comments) on lines as instructed. You will not be writing any code
    in this file, just seeing how functions work.

    A function in JavaScript is a block of reusable code designed to perform a particular
    task. Functions provide a way to modularize your code, making it easier to organize,
    understand, and reuse.

    Your basic function in JavaScript will follow a structure like this:

    function functionName(parameter1, parameter2) {
        // Function body
        // Perform tasks here
    }

    - To declare a function, first write the "function" keyword.
    - Next, give your function a name. It can be called anything you'd like, but make sure
      it describes what the function does.
    - Follow up with some parentheses. You may elect to provide parameters if you want,
    - but they're not required.
        i. Parameters are values that users will provide.
    - Write a pair of curly brackets.
    - Write your logic!
*/

// Here's an example function that sends a greeting.

//////////// COMMENT IN LINES 24-26 ////////////
function greeting(name) {
    console.log("Hello " + name + "!");
}

// To use a function, we "invoke" or "call" it by writing the name of the function
// followed by parentheses and any parameters we need to provide.
//////////// COMMENT IN LINE 30 ////////////
greeting("Ben");

// Run your code using the "node" command! You should be able to see "Hello Ben!".

/*
    Sometimes, you'll need to return a value as well.

    Returning a value is different than logging a value. When you log a value, that value
    disappears because it's not being stored anywhere. By using the "return" keyword, we
    can take that value and "return" it into a variable to store for use later.

    function functionName(parameter1, parameter2) {
        return parameter1 + parameter2;
    }
*/

//////////// COMMENT IN LINES 46-48 AND LINE 50 ////////////
// Here's an example function that adds two numbers together.
function add(num1, num2) {
    return num1 + num2;
}

add(1, 2);

// If you run this code, you'll see that you're not getting the expected value of "3" back
// in the console. This is because returning doesn't print any value, it just returns the
// value for us to use later! If we want to see the value printed to the console, make
// sure you log it.

//////////// COMMENT IN LINE 55 ////////////
// console.log(add(1,2));

// ... or you can store the return in a variable and log the variable.

//////////// COMMENT IN LINES 60-61 ////////////
const result = add(1, 2);
console.log(result);

/*
    Great work! Move onto the "functions.js" file and try your hand at writing out some
    functions.

    If you'd like to read more, feel free to do so here:
    https://www.w3schools.com/js/js_functions.asp
*/
