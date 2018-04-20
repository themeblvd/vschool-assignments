function add( a, b ) {
    return a + b;
}

console.log( add( 2, 5 ) ); // 7

function largest( a, b, c ) {
    return Math.max( a, b, c );
}

console.log( largest( 2, 50, 10 ) ); // 50

function evenOrOdd( a ) {
    if ( a % 2 == 0 ) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log( evenOrOdd( 122 ) ); // "even"

console.log( evenOrOdd( 123 ) ); // "odd"

function strMutate( str ) {
    if ( str.length <= 20 ) {
        return str + str;
    } else {
        return str.substring( 0, str.length / 2 );
    }
}

console.log( strMutate( 'Short text here.' ) ); // "Short text here.Short text here."

console.log( strMutate( 'This is a longer sentence.' ) ); // "This is a lon"
