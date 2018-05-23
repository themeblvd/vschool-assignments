/**
 * No Duplicates
 *
 * Given a string, your task is to remove any
 * duplicated letters from it. Any letters you
 * remove should be added to another string
 * called "duplicates".
 *
 * @link https://coursework.vschool.io/no-duplicates/
 */

var input = "bookkeeper larry";
var noDuplicates = [];
var extras = [];

for ( let i = 0; i < input.length; i++ ) {

    if ( noDuplicates.indexOf( input[ i ] ) === -1 ) {
        noDuplicates.push( input[ i ] );
    } else {
        extras.push( input[ i ] );
    }
}

console.log( noDuplicates.join( '' ) );

console.log( extras.join( '' ) );
