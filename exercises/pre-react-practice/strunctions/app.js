/**
 * Use String.toLowerCase() and String.toUpperCase()
 */
function getStrVariations( str ) {

    return [
        str,
        str.toLowerCase(),
        str.toUpperCase()
    ];

}

console.log( getStrVariations( 'Dog' ) ); // ['Dog', 'DOG', 'dog']

/**
 * Use String.match() and String.replace()
 */
function dogToCat( str ) {

    if ( ! str.match( 'dog' ) ) {
        return 'There was no dog.';
    }

    return str.replace( 'dog', 'cat' );

}

console.log( dogToCat( 'The pig is fierce.' ) ); // "There was no dog"

console.log( dogToCat( 'The dog is fierce.' ) ); // "The cat is fierce"

/**
 * Find the dog's name from the string.
 */
function findDogName( str ) {

    var words  = str.split( ' ' ),
        marker = words.indexOf( 'named' ),
        name;

    if ( marker === -1 ) {
        return "You forgot to tell us the dog's name.";
    }

    name = words[ marker + 1 ];

    name = name.replace( /\./g, '' );

    name = name.replace( /\,/g, '' );

    return name;

}

console.log( findDogName( 'I have a cool dog.' ) ); // "You forgot to tell us the dog's name."

console.log( findDogName( 'A dog named Spot.') ); // Spot

console.log( findDogName( 'My dog was named Spot many years ago.' ) ); // Spot

/**
 * Use String.cocat(); a similar function to
 * Array.join(), but that works like PHP's implode().
 */
function implode( glue, pieces ) {

    var str = '';

    for ( var i = 0; i < pieces.length; i++ ) {
        str = str.concat( pieces[ i ], glue );
    }

    str = str.slice( 0, str.length - 1 ) // Remove final space at end (instead of .trim() for sake of assignment to use .slice())

    return str;

}

console.log( implode( ' ', ['dog', 'cat', 'rabbit'] ) ); // "dog cat rabbit"

/**
 * String.substr() method as a function.
 */
function getSubstr( str, start, length ) {
    return str.substr( start, length );
}

console.log( getSubstr( 'hello world', 6 ) ); // "world"

console.log( getSubstr( 'foo bar baz', 4, 3 ) ); // "bar"
