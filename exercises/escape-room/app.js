/**
 * Escape room.
 *
 * Assignment: Write a game that lets a user
 * escape a room. The character finds him/herself
 * locked in a room. In order to escape the room,
 * your character needs to find the key in the room
 * and then open the door. There's also a hole in
 * the wall in the room. If your character puts his
 * hand in the hole, he dies.
 *
 * @link https://coursework.vschool.io/escape-room/
 */

var readlineSync = require( 'readline-sync' );

var gameOver = false;

var foundKey = false;

while ( ! gameOver ) {

    var choices = [
        "Put hand in hole.",
        "Find the key.",
        "Open the door."
    ];

    index = readlineSync.keyInSelect( choices, "What do you want to do?" );

    switch ( index ) {

        // Put hand in hole.
        case 0:
            gameOver = true;
            console.log( "\nThe hole was bad and you died! Game over.\n" );
            break;

        // Find the key.
        case 1:
            if ( foundKey ) {
                console.log( "\nYou already have the key.\n" );
            } else {
                foundKey = true;
                console.log( "\nGood job! You now have the key.\n" );
            }
            break;

        // Open the door.
        case 2:
            if ( foundKey ) {
                gameOver = true;
                console.log( "\nScore! You made it through the door! You've won the game.\n" );
            } else {
                console.log( "\nYou can't open the door without the key.\n" );
            }
            break;

        // Cancel
        default:
            gameOver = true;
            console.log( "\nYou've exited the game.\n" );

    }

}
