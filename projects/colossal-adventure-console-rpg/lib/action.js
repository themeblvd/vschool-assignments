var display = require('./display');
var enemies = require('./enemies');
var player = require('./player');
var chalk = require('chalk');

const action = {};

/**
 * Represents the start for each player move.
 *
 * This will get recursively called while the
 * player is still playing.
 *
 * Using a standard while loop will not work
 * with our asynchronous animations.
 */
action.continue = function(){

    display.ask("Would you like to move forward? Press 'w' to walk", function(input) {

        switch (input) {

            case 'w':
                action.walk();
                break;

            case 'p':
                display.clear();
                display.print();
                action.continue();
                break;

            default:
                display.br();
                display.msg("Goodbye. See ya later, quitter.");

        }
    }, ['w', 'p', 'q']);

};

/**
 * Games ends.
 */
action.end = function(){

    if (player.score >= 100) {
        display.winnerScreen();
    } else {
        display.loserScreen();
    }

    display.print();

};

/**
 * Player moves forward.
 */
action.walk = function(){
    display.moveAnimation('walk', 750, function(){
        action.meetEnemy();
    });
}

/**
 * Meet an enemy, after walking.
 */
action.meetEnemy = function(){

    enemies = enemies.filter(function(enemy){
        return enemy.isAlive;
    });

    var max = enemies.length - 1;
    var min = 0;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var enemy = enemies[ random ];

    display.clear();

    display.enemy( enemies[ random ] );

    display.select("What would you like to do?", ['Fight', 'Run', 'Cower'], function(selection){

        switch(selection) {

            case "Fight":
                display.moveAnimation("fight", 250, function(){

                    display.clear();
                    player.update('fought', 1);

                    if (Math.floor(Math.random() * 10) + 1 <= enemy.danger) { // Enemy danger is 1-10.
                        player.update('health', enemy.danger);
                        player.update('score', +enemy.points);
                        enemy.isAlive = false;
                        action.wonFight();
                    } else {
                        player.update('health', -enemy.danger);
                        action.lostFight();
                    }
                });
                break;

            case "Run":
                display.moveAnimation("run", 400, function(){

                    display.clear();
                    player.update('ran', 1);

                    if (Math.floor(Math.random() * 10) + 1 <= 5) { // 50/50
                        player.update('score', Math.floor(enemy.points / 2)); // Get 50% enemy points for running away successfully.
                        action.ranAway();
                    } else {
                        player.update('health', -enemy.danger);
                        action.lostFight();
                    }
                });
                break;

            case "Cower":
                display.clear();
                player.update('cowered', 1);
                player.update('health', -1);
                action.cowered();
                break;
        }

    });

};

/**
 * Handle the player winning a fight.
 */
action.wonFight = function(){

    var health = chalk.keyword('red').bold(player.health),
        score  = chalk.keyword('yellow').bold(player.score);

    if ( player.isPlaying() ) {
        display.boxHeader("😀 💪 Success!", "green");
        display.msg(display.randomMsg('wonFight'), null, "box");
        display.br();
        display.msg(`Health: ${health}, Score: ${score}/100`, null, "box", true);
        display.boxFooter('green');
        action.continue();
    } else {
        display.boxHeader("😀 💪 Success!", "green");
        display.msg(`${display.randomMsg('wonFight')} -- And that gives you enough points to win the game!`, null, "box");
        display.boxFooter('green');
        action.end();
    }
};

/**
 * Handle damage to the player.
 */
action.lostFight = function(){

    var health = chalk.keyword('red').bold(player.health),
        score  = chalk.keyword('yellow').bold(player.score);

    if ( player.isPlaying() ) {
        display.boxHeader("🤕 Ouch!", "orange");
        display.msg(display.randomMsg('lostFight'), null, "box");
        display.br();
        display.msg(`Health: ${health}, Score: ${score}/100`, null, "box", true);
        display.boxFooter('orange');
        action.continue();
    } else {
        display.boxHeader("😵‍ Ouch!", "orange");
        display.msg(`${display.randomMsg('lostFight')} You are now dead.`, null, "box");
        display.boxFooter('orange');
        action.end();
    }
};

/**
 * Handle the player successfully running
 * away.
 */
action.ranAway = function(){

    if ( player.isPlaying() ) {

        var health = chalk.keyword('red').bold(player.health),
            score  = chalk.keyword('yellow').bold(player.score);

        display.boxHeader("😀 Success!", "green");
        display.msg(display.randomMsg('ranAway'), null, "box");
        display.br();
        display.msg(`Health: ${health}, Score: ${score}/100`, null, "box", true);
        display.boxFooter('green');
        action.continue();

    } else {
        display.boxHeader("😀 Success!", "green");
        display.msg(`${display.randomMsg('ranAway')} -- And that gives you enough points to win!`, null, "box");
        display.boxFooter('green');
        action.end();
    }
};

/**
 * Handle the player cowering.
 */
action.cowered = function(){

    if ( player.isPlaying() ) {

        var health = chalk.keyword('red').bold(player.health),
            score  = chalk.keyword('yellow').bold(player.score);

        display.boxHeader("🤕 Ouch!", "orange");
        display.msg(display.randomMsg('cowered'), null, "box");
        display.br();
        display.msg(`Health: ${health}, Score: ${score}/100`, null, "box", true);
        display.boxFooter('orange');
        action.continue();
    } else {
        display.boxHeader("😵‍ Ouch!", "orange");
        display.msg("Cowering can usually get you through it, but not this time. You are now dead.", null, "box");
        display.boxFooter('orange');
        action.end();
    }
};

module.exports = action;
