// Preliminaries

if ( 5 > 3 ) {
    console.log( 'is greater than' );
}

if ( 'cat'.length == 3 ) {
    console.log( 'is the length' );
}

if ( 'cat' == 'dog' ) {
    console.log( 'is the same' );
} else {
    console.log( 'not the same' );
}

// Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}

if ( person.age >= 18 ) {
    console.log( `${person.name} is allowed to go to the movie`  );
} else {
    console.log( `${person.name} is not allowed to go to the movie` );
}

if ( person.name[0] == 'B' ) {
    console.log( `${person.name} is allowed to go to the movie`  );
} else {
    console.log( `${person.name} is not allowed to go to the movie` );
}

if ( person.name[0] == 'B' && person.age >= 18 ) {
    console.log( `${person.name} is allowed to go to the movie`  );
} else {
    console.log( `${person.name} is not allowed to go to the movie` );
}

// Silver Medal

if ( 1 === '1' ) {
    console.log( 'strict' );
} else if ( 1 == '1' ) {
    console.log( 'loose' );
} else {
    console.log( 'not equal at all' );
}

if ( 1 <= 2 && 2 == 4 ) {
    console.log( 'yes' );
}

if ( 3 * 4 > 10 && 5 + 10 > 10 ) {
    console.log( 'yes' );
}

// Gold Medal

if ( typeof 'dog' == 'string' ) {
    console.log( 'yes' );
}

if ( typeof 'true' == 'boolean' ) {
    console.log( 'yes' );
}

if ( typeof foo == 'undefined' ) {
    console.log( 'not defined' );
}

if ( "s" > 12 ) {
    console.log( 'not going to print' );
}

if ( "s" > 1 ) {
    console.log( 'will not print' );
}

var myNum = 10;

myNum % 2 === 0 ? console.log( 'number is even' ) : console.log( 'number is odd' );
