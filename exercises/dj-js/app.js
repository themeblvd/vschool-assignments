( function() {

    /*
     * The square's color will change as follows:
     *
     * 1. Blue when the mouse hovers over the square
     * 2. Red when the mouse button is held down over the square
     * 3. Yellow when the mouse button is let go over the square
     * 4. Green when the mouse is double clicked in the square
     * 5. Orange when the mouse scroll is used somewhere in the
     * window (not just over the square).
     * 6. Change to one of the five colors if the first letter of
     * the color is pressed.
     *
     * @link https://coursework.vschool.io/dj-js/
     */

    var square = document.getElementById( 'square' );

    square.addEventListener( 'mouseenter', function( event ) {
        event.target.style.backgroundColor = 'blue';
    } );

    square.addEventListener( 'mousedown', function( event ) {
        event.target.style.backgroundColor = 'red';
    } );

    square.addEventListener( 'mouseup', function( event ) {
        event.target.style.backgroundColor = 'yellow';
    } );

    square.addEventListener( 'dblclick', function( event ) {
        event.target.style.backgroundColor = 'green';
    } );

    document.addEventListener( 'scroll', function( event ) {
        square.style.backgroundColor = 'orange';
    } );

    document.addEventListener( 'keypress', function( event ) {

        switch ( event.key ) {

            case 'b':
                square.style.backgroundColor = 'blue';
                break;

            case 'r':
                square.style.backgroundColor = 'red';
                break;

            case 'y':
                square.style.backgroundColor = 'yellow';
                break;

            case 'g' :
                square.style.backgroundColor = 'green';
                break;

            case 'o' :
                square.style.backgroundColor = 'orange';
                break;

            default:
                return;

        }

    } );

} )();
