/**
 * Write a function that returns an array containing
 * the numbers from 1 to 100.
 *
 * 1. If the number is divisible by 3 it should be replaced
 * by "fizz".
 *
 * 2. If the number is divisible by 5, replace it with
 * "buzz".
 *
 * 3. If the number is divisible by both 3 and 5, replace it
 * with "fizzbuzz".
 */
function fizzBuzz(){

    var arr = [];

    for ( var i = 1; i <= 100; i++ ) {
        if ( i % 3 == 0 && i % 5 == 0 ) {
            arr.push( 'fizzbuzz' );
        } else if ( i % 3 == 0 ) {
            arr.push( 'fizz' );
        } else if ( i % 5 == 0 ) {
            arr.push( 'buzz' );
        } else {
            arr.push( i );
        }
    }

    return arr;

}

console.log( fizzBuzz() );
