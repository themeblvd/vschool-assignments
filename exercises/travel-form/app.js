( function() {

    var form = document.getElementById( 'travel-info' );

    form.addEventListener( 'submit', function( event ) {

        event.preventDefault();

        var message = '';

        if ( form['first-name'].value ) {
            message += `First Name: ${form['first-name'].value}\n`;
        }

        if ( form['last-name'].value ) {
            message += `Last Name: ${form['last-name'].value}\n`;
        }

        if ( form.age.value ) {
            message += `Age: ${form.age.value}\n`;
        }

        if ( form.gender.value ) {
            message += `Gender: ${form.gender.value}\n`;
        }

        if ( form.location.value ) {
            message += `Location: ${form.location.value}\n`;
        }

        if ( form.diet ) {

            var diet = [];

            for ( var i = 0; i < form.diet.length; i++ ) {
                if ( form.diet[ i ].checked ) {
                    diet.push( form.diet[ i ].value );
                }
            }

            if ( ! diet.length ) {
                diet.push( 'None' );
            }

            message += `Dietary Restrictions: ${diet.join( ', ' )}\n`;

        }

        alert( message );

    } );

} )();
