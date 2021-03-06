/**
 * Random password generator.
 *
 * Assignment: Write a function that generates a completely
 * random password including uppercase, lowercase, numeric,
 * and symbol characters. The function should accept one
 * argument, an integer defining how long the password should be.
 *
 * @link https://coursework.vschool.io/random-password-generator-2/
 */
function getPassword( pwLength ) {

    var password = '';

    var possible = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for ( var i = 0; i < pwLength; i++ ) {
        password += possible[ Math.floor( Math.random() * possible.length + 1 ) ]; // Without + 1, we'd never get last char.
    }

    return password;

}

console.log( `5 character password: ${getPassword( 5 )}` );
console.log( `10 character password: ${getPassword( 10 )}` );
console.log( `20 character password: ${getPassword( 20 )}` );
