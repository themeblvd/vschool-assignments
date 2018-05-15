( function() {

    var calculator = document.calculator;

    calculator.add.addEventListener( 'click', function( event ) {

        event.preventDefault();

        var a = parseInt( calculator.elements['add-1'].value ),
            b = parseInt( calculator.elements['add-2'].value );

        calculator.querySelector( '#add-result' ).textContent = a + b;

    } );

    calculator.subtract.addEventListener( 'click', function( event ) {

        event.preventDefault();

        var a = parseInt( calculator.elements['subtract-1'].value ),
            b = parseInt( calculator.elements['subtract-2'].value );

        calculator.querySelector( '#subtract-result' ).textContent = a - b;

    } );

    calculator.multiply.addEventListener( 'click', function( event ) {

        event.preventDefault();

        var a = parseInt( calculator.elements['multiply-1'].value ),
            b = parseInt( calculator.elements['multiply-2'].value );

        calculator.querySelector( '#multiply-result' ).textContent = a * b;

    } );

} )();
