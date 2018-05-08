/**
 * Holds the player info.
 */
const player = {
    name: '',
    score: 0, // 100 points to win.
    health: 10,
    fought: 0,
    ran: 0,
    cowered: 0
};

/**
 * Determines if the game is still running.
 *
 * If the health is at 0, the player is dead.
 * If the score passes 100, they win.
 */
player.isPlaying = function() {

    if (this.health <= 0 || this.score >= 100) {
        return false;
    }

    return true;
};

/**
 * Gets the number of enemeies the player
 * has successfully defeated.
 */
player.defeatedEnemies = function(enemies) {

    var str = enemies
        .filter(enemy => ! enemy.isAlive)
        .map(enemy => enemy.name)
        .join(', ');

    if (! str) {
        str = "None";
    }

    return str;

};

/**
 * Gets the number of enemeies the player
 * has successfully defeated.
 */
player.remainingEnemies = function(enemies) {

    var str = enemies
        .filter(enemy => enemy.isAlive)
        .map(enemy => enemy.name)
        .join(', ');

    if (! str) {
        str = "None";
    }

    return str;

};

/**
 * Updates any player data property.
 */
player.update = function(prop, value) {

    if (prop == "name") {
        this[prop] = value;
    } else {
        this[prop] += value;
    }
};

module.exports = player;
