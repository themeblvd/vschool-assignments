(function(){

    /**
     * Go Speed Clicker!
     *
     * Make a site that tracks how many times the
     * user has clicked anywhere on the page
     * (or a specific button if you prefer) and
     * displays that click count to the user.
     *
     * Then, using localStorage or sessionStorage,
     * make it so the number of clicks will remain
     * on the screen even after the site is refreshed.
     *
     * @link https://coursework.vschool.io/go-speed-clicker/
     */

    // session = short-term
    // local = long-term

    // Available methods, if not using dot notation.
    // sessionStorage.getItem('key');
    // sessionStorage.setItem('key', 'value');
    // sessionStorage.removeItem('key');

    var h1 = document.getElementById('header');

    if (! sessionStorage.count) {
        sessionStorage.count = 0;
    }

    h1.innerHTML = sessionStorage.count;

    document.getElementById('button').addEventListener('click', function(event){

        event.preventDefault();

        sessionStorage.count++;

        h1.innerHTML = sessionStorage.count;

    });

})();
