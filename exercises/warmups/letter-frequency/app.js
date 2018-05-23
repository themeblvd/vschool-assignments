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
