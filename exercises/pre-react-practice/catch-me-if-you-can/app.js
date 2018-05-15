/**
 * Catch Me If you Can
 *
 * @link https://coursework.vschool.io/catch-me-if-you-can/
 */

// 1a) Write a function that returns the sum of two numbers.
// Throw an error if either argument is not of the data type
// number:

function sum(x, y){

    try {
        if ( typeof x !== 'Number' || typeof y !== 'Number' ) {
            throw 'Non-integer given.';
        }
    }
    catch(error) {
        console.log(error);
    }

    return x + y;
}

// console.log( sum( 2, 2 ) );

// console.log( sum( 2, "2" ) );

// 1b) Call the sum function inside a try block using "1"
// and "2" as arguments. Use console.log within a catch block
// to inform the user of the error.

try {
    sum( "1", "2" );
}
catch (error) {
    console.log(error);
}

// 2a) Given a user object, write a function called login that
// takes a username and password as parameters. Throw an error
// if either of them don't match. Otherwise, log to the console
// a message saying "login successful!"

var user = {username: "sam", password: "123abc"};

function login(username, password){

    try {
        if ( username !== user.username || password !== user.password ) {
            throw 'Login failed.';
        } else {
            console.log( 'Login successful!' );
        }
    }
    catch (error) {
        console.log(error);
    }
}

login('sam', '123abc');

login('sam', 'balls');

// 2b) Call the login function within a try block. In one
// instance use the correct credentials, and in another use
// incorrect ones. Make sure you see the appropriate message!

try {
    login('sam', '123abc');
}
catch (error) {
    console.log(error);
}

try {
    login('sam', 'balls');
}
catch (error) {
    console.log(error);
}
