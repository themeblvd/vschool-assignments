var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt?: ');
var shift = parseInt(readline.question('How many letters would you like to shift?: '));

console.log( cypher( input, shift ) );

function cypher( str, shift ) {

    var abc = 'abcdefghijklmnopqrstuvwxyz';

    var encoded = '';

    str = str.toLowerCase();

    for ( let i = 0; i < str.length; i++ ) {

        let currentIndex = abc.indexOf( str[i] );

        if ( currentIndex > -1 ) {
            encoded += abc[ (currentIndex + shift) % abc.length ];
        } else {
            encoded += str[i];
        }
    }

    return encoded;
}
