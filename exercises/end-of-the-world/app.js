( function() {

    var timer = document.getElementById( 'timer' );

    var count = 20; // seconds

    var runTimer = setInterval( function() {

        count--;

        var date = new Date( null );

        date.setSeconds( count );

        timer.textContent = date.toISOString().substr( 11, 8 );

        if ( count == 0 ) {

            timer.classList.add( 'finished' );

            clearInterval( runTimer );

            var message = document.createElement( 'div' );

            message.classList.add( 'message' );

            message.textContent = 'The end of the world has come upon us.';

            timer.appendChild( message );

            setInterval( function() {

                count++;

                if ( count % 2 == 0 ) {
                    timer.classList.remove( 'hide' );
                } else {
                    timer.classList.add( 'hide' );
                }

            }, 500 );

        }

    }, 1000 );

} )();
