(function parsePokemon(){

    var app = document.getElementById('app');

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var data = JSON.parse(xhr.responseText).objects[0].pokemon;

            data.forEach(function(pokemon){

                var elem = document.createElement('p');

                elem.innerHTML = pokemon.name;

                app.appendChild(elem);

            });

        }
    };

    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);

    xhr.send();

})();
