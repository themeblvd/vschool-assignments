var readlineSync = require( 'readline-sync' );

var firstName = readlineSync.question( 'What is your first name?: ' );

console.log( `\nWell, thank you, ${firstName.toUpperCase()}.` );

var lastName = readlineSync.question( '\nNow, what is your last name?: ' );

console.log( `\nSo then I guess your full name is ${firstName} ${lastName}.` );

var color = readlineSync.question( '\nWhat is your favorite color?: ' );

console.log( `\nFun fact. Your favorite color, ${color}, has ${color.length} characters.` );

var message = readlineSync.question( '\nType a long, boring message: ' );

if ( message.length < 20 ) {
    console.log( "\nYour message wasn't long enough." );
} else {
    console.log( `\nYup, your message "${message.substr(0, 20)}..." was indeed long and boring.` );
}

var int = readlineSync.question( '\nEnter an index to start cutting off that message: ' );

console.log( `\nYour message now reads: ${message.slice(int)}` );

console.log( '\n----- Program done. Terminate. -----\n' );
