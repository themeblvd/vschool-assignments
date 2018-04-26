( function() {

    const baddies = [
        {
            id: 'goomba',
            name: "Goombas",
            amt: 5,
            value: 0
        },
        {
            id: 'bobomb',
            name: "Bob-ombs",
            amt: 7,
            value: 0
        },
        {
            id: 'cheepcheep',
            name: "Cheep-cheep",
            amt: 11,
            value: 0
        }
    ];

    const totalDisplay = document.getElementById( 'total-display' );

    const baddiesDisplay = document.getElementById( 'baddies' );

    // Add the baddies list to the DOM.
    renderBaddies();

    // Binds the arrow buttons to control the input values.
    bindControls();

    // Watch for input changes.
    bindInputChanges();

    /* -- Functions ----------------------------------------------- */

    /**
     * Render the HTML for the baddies list
     * and add it to the DOM.
     */
    function renderBaddies() {

        for ( let i = 0; i < baddies.length; i++ ) {

            let item = document.createElement( 'li' );

            item.classList.add( baddies[ i ].id );

            item.innerHTML += `<div class="avatar">
                <span>${baddies[ i ].name}</span>
                <img src="img/${baddies[ i ].id}.png" srcset="img/${baddies[ i ].id}.png 1x, img/${baddies[ i ].id}@2x.png 2x">
            </div>`;

            item.innerHTML += `<div class="amt">${baddies[ i ].amt}</div>`;

            item.innerHTML += `<div class="score">
                <input id="${baddies[ i ].id}-score" type="number" value="0" min="0">
                <a href="#" data-baddie="${baddies[ i ].id}" data-direction="up" class="arrow up"></a>
                <span class="arrow-divider"></span>
                <a href="#" data-baddie="${baddies[ i ].id}" data-direction="down" class="arrow down"></a>
            </div>`;

            baddiesDisplay.appendChild( item );

        }
    }

    /**
     * Allow the arrow control buttons to increase
     * and decrease the values.
     */
    function bindControls() {

        var buttons = document.getElementsByClassName( 'arrow' );

        for ( let i = 0; i < buttons.length; i++ ) {

            buttons[ i ].addEventListener( 'click', function( event ) {

                event.preventDefault();

                var input = document.getElementById( `${event.target.dataset.baddie}-score` );

                if ( 'up' == event.target.dataset.direction ) {

                    input.value++;

                    baddies.find( x => x.id == event.target.dataset.baddie ).value++;

                    updateTotal();

                } else if ( input.value > 0  ) {

                    input.value--;

                    baddies.find( x => x.id == event.target.dataset.baddie ).value--;

                    updateTotal();

                }
            } );
        }

    }

    /**
     * When inputs are changes, update the state and
     * display total.
     */
    function bindInputChanges() {

        for ( let i = 0; i < baddies.length; i++ ) {

            document.getElementById( `${baddies[ i ].id}-score` ).addEventListener( 'change', function() {

                console.log(event.target.value);

                if ( event.target.value && event.target.value > 0 ) {
                    baddies[ i ].value = event.target.value;
                } else {
                    event.target.value = 0;
                }

                updateTotal();

            } );
        }
    }

    /**
     * Re-calculate the total and display it.
     */
    function updateTotal() {

        var total = 0;

        for ( let i = 0; i < baddies.length; i++ ) {
            total += baddies[ i ].amt * baddies[ i ].value;
        }

        totalDisplay.textContent = Math.abs( total ); // > 0

    }

} )();
