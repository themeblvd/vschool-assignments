// 1. Write a function that accepts a string as input. Write a
// loop to print out each letter of that string individually.

function printChars( str ) {
    for ( var i = 0; i < str.length; i++ ) {
        console.log( str[ i ] );
    }
}

printChars( 'hello world' );

// 2. Write a function that accepts a string and a single character
// as inputs. Write a loop that iterates over the string, and prints
// the position of the first occurrence of the specified character.
// If the character is not found, tell that to the user.

function findChar( str, char ) {

    for ( var i = 0; i < str.length; i++ ) {
        if ( str[ i ] == char ) {
            console.log( i );
            return;
        }
    }

    console.log( 'Character was not found.' );

}

findChar( 'hello world', 'l' ); // 2

findChar( 'hello world', 'b' ); // "Character was not found."

// 3. Write a function that accepts an array of numbers as a parameter.
// Quit the function when the number 42 is found. Let the user know
// if 42 is not found.

function find42( numbers ) {

    for ( var i = 0; i < numbers.length; i++ ) {
        if ( numbers[ i ] == 42 ) {
            console.log( 'Found' );
            return;
        }
    }

    console.log( 'Not Found' );

}

find42( [1, 2, 3, 42] ); // "Found"

find42( [1, 2, 3, 4] ); // "Not Found"

// 4. Write a function that accepts 10 numbers in an array and then
// prints out the smallest number out of the ten without using Math.min().

function smallestNum( numbers ) {

    var smallest = Math.max( ...numbers );

    console.log( smallest )

    for ( var i = 0; i < numbers.length; i++ ) {

        if ( numbers[ i ] < smallest ) {
            smallest = numbers[ i ];
        }
    }

    console.log( smallest );

}

smallestNum( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ); // 1

smallestNum( [20, 30, 40, 50, 45, 35, 25, 15, 10, 5] ); // 5
