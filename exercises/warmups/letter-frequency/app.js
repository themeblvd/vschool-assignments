/**
 * Letter Frequency
 *
 * Find the frequency of all the letters in a given
 * word or phrase, and print them to the console.
 *
 * @link https://coursework.vschool.io/letter-frequency/
 */

console.log( letterFrequency( 'slimy smelly solution' ) );

function letterFrequency( phrase ) {

    var frequency = {};

    for ( let i = 0; i < phrase.length; i++ ) {

        if ( frequency[ phrase[i] ] ) {
            frequency[ phrase[i] ]++;
        } else {
            frequency[ phrase[i] ] = 1;
        }
    }

    return frequency;
}
