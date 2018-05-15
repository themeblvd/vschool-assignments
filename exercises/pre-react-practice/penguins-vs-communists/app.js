/**
 * Penguins vs. Communists
 *
 * @link https://coursework.vschool.io/penguins-vs-communists/
 */

class Party {
    constructor(name, population) {
        this.name = name;
        this.population = 1000000;
    }
}

const penguins = new Party('Penguins');

const communists = new Party('Communists');

var attackee = fiftyFifty() ? penguins : communists;

sendNuke(attackee, onHit, onMiss);

/* ------ FUNCTIONS ---------------------------------*/

/**
 * Launch a nuke!
 */
function sendNuke(attackee, onHit, onMiss) {

    var i = 1;

    var interval = setInterval(function(){

        switch (i) {
            case 1:
            case 4:
            case 6:
            case 9:
                clear();
                console.log(`${getAttacker(attackee).name} are attacking.`);
                break;

            case 2:
            case 5:
            case 7:
            case 10:
                clear();
                console.log(`${getAttacker(attackee).name} are attacking..`);
                break;

            case 3:
            case 4:
            case 8:
            case 11:
                clear();
                console.log(`${getAttacker(attackee).name} are attacking...`);
                break;

            default:
                clearInterval(interval);

                if (fiftyFifty()) {
                    onHit(attackee);
                } else {
                    onMiss(attackee);
                }
        }

        i++;

    }, 250);
}

/**
 * Callback when a party is hit.
 */
function onHit(attackee) {

    var attacker = getAttacker(attackee);

    applyDamage(attackee);

    console.log(`Ouch! The ${attacker.name}' nuke just hit the ${attackee.name}.`);

    console.log(`The ${attackee.name}' population is now down to ${attackee.population.toLocaleString('en')}.`);

    if (attackee.population > 0) {
        setTimeout(function(){
            sendNuke(attacker, onHit, onMiss); // attacker now being passed as the new attackee.
        }, 3000);
    } else {
        console.log(`Game over. The ${attacker.name} win!`);
    }
}

/**
 * Callback when a party is missed.
 */
function onMiss(attackee) {

    var attacker = getAttacker(attackee);

    console.log(`The ${attacker.name}' nuke missed the ${attackee.name} and instead\nlanded in the ocean.`);

    setTimeout(function(){
        sendNuke(attacker, onHit, onMiss); // attacker now being passed as the new attackee.
    }, 3000);

}

/**
 * Update the population, to apply damage
 * received when a party has been hit.
 */
function applyDamage(party) {

    var min = 100000;
    var max = 500000;

    var amt = Math.floor(Math.random() * (max - min + 1)) + min;

    if (party.name == 'Communists') {

        communists.population -= amt;

        if (communists.population < 0) {
            communists.population = 0;
        }

    } else if (party.name == 'Penguins') {

        penguins.population -= amt;

        if (penguins.population < 0) {
            penguins.population = 0;
        }
    }
}

/**
 * Get the attacker, when given the attackee.
 */
function getAttacker(attackee) {
    return attackee.name == 'Communists' ? penguins : communists;
}

/**
 * Return true/false at 50/50 odds.
 */
function fiftyFifty() {
    return Math.random() >= 0.5 ? true : false;
}

/**
 * Clears the console.
 */
function clear() {
    process.stdout.write('\u001b[2J');
    process.stdout.write('\u001b[1;1H');
}
