/**
 * JavaScript Calculator.
 *
 * @link https://coursework.vschool.io/javascript-calculator/
 */

var readlineSync = require( 'readline-sync' );

var num1 = readlineSync.question( 'Please enter your first number: ' );

var num2 = readlineSync.question( 'Please enter your second number: ' );

var operations = ['Add', 'Subtract', 'Multiply', 'Divide'];

var operationIndex = readlineSync.keyInSelect( operations, 'Please enter the operation to perform: ' );

console.log( `The result is: ${getResult( num1, num2, operations[ operationIndex ] )}` );

/**
 * Determine the operation and get the result.
 */
function getResult( num1, num2, operation ) {

    num1 = parseInt( num1 );

    num2 = parseInt( num2 );

    switch ( operation ) {

        case 'Add':
            return add( num1, num2 );
            break;

        case 'Subtract':
            return sub( num1, num2 );
            break;

        case 'Multiply':
            return mul( num1, num2 );
            break;

        case 'Divide':
            return div( num1, num2 );
            break;

        default:
            return 0;

    }
}

/**
 * Add two numbers.
 */
function add( num1, num2 ) {
    return num1 + num2;
}

/**
 * Subtract two numbers.
 */
function sub( num1, num2 ) {
    return num1 - num2;
}

/**
 * Multiply two numbers.
 */
function mul( num1, num2 ) {
    return num1 * num2;
}

/**
 * Divide two numbers.
 */
function div( num1, num2 ) {
    return num1 / num2;
}
