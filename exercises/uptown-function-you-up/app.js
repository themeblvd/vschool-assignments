var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];
/**
 * 1. The first function will take this array, and print
 * it to the console. Make sure to add spaces in-between
 * each word so it looks nice on the console
 */
function printLyrics( lyrics ) {
    console.log( lyrics.join( ' ' ) );
}

// printLyrics( lyrics );

/**
 * 2. The second function will do the same thing, but print
 * the song backwards (starting with the word "pretty": "pretty
 * so I'm myself kiss Gotta", etc.).
 */

function printReverseLyrics( lyrics ) {
    console.log( lyrics.reverse().join( ' ' ) );
}

printReverseLyrics( lyrics );

/**
 * 3. The third function will print every other word to
 * the console, i.e. "this that cold Pfeiffer", etc.
 */
function printEveryOtherLyric( lyrics ) {

    var reverseLyrics = [];

    for ( let i = 0; i < lyrics.length; i++ ) {
        if ( i % 2 === 0 ) {
            reverseLyrics.push( lyrics[i] );
        }
    }

    console.log( reverseLyrics.join( ' ' ) );

}

printEveryOtherLyric( lyrics );

/**
 * 4. Create a fourth function that reverses every two words.
 * So the end result would look like this: "hit This ice that
 * Michelle cold" ...
 */
function printLyricSwap( lyrics ) {

    var print = [];

    for ( let i = 0; i < lyrics.length; i++ ) {
        if ( i % 2 === 0 ) {
            print.push( lyrics[ i + 1 ] );
            print.push( lyrics[ i ] );
        }
    }

    console.log( print.join( ' ' ) );

}

printLyricSwap( lyrics );
