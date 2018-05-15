
console.log( antiCaps( 'Hello' ) ); // hELLO
console.log( antiCaps( 'racEcar') ); // RACeCAR
console.log( antiCaps( 'bAnAnA' ) ); // BaNaNa

function antiCaps( str ) {

    var newStr = '';

    for ( let i = 0; i < str.length; i++ ) {
        if ( isCaps( str[ i ] ) ) {
            newStr += str[ i ].toLowerCase();
        } else {
            newStr += str[ i ].toUpperCase();
        }
    }

    return newStr;
}

function isCaps( letter ) {
    return letter === letter.toUpperCase();
}
