var player = require('./lib/player');
var display = require('./lib/display');
var action = require('./lib/action');
var player = require('./lib/player');

/* === GAME LOGIC  ============ */

/*
 * 1. There are five enemies, each with a unique
 * award point value for being defeated.
 *    - Killing all enemies will add up to 100 points,
 *      which is the exact amount needed to win.
 *    - 1/2 the enemy's point value is also awarded
 *      for escaping by running from an enemy.
 *    - Winning the game is a result of accumulating
 *      at least 100 points and NOT defeating all the
 *      enemies.
 *
 * 2. There are three actions a player can take when
 * facing an enemy and engaging in a single battle.
 *    - FIGHTING: Winning odds are <enemy danger> / 10.
 *    - RUNNING: Winning odds are 50%.
 *    - COWERING: Winning odds are 0%.
 *
 * 3. Each enemy has a danger level, which is a
 * number from 1-10, i.e. `4`.
 *    - When FIGHTING an enemy, the percentage
 *      of this number divided by 10 is the chance
 *      the enemy will win.
 *    - For example, danger value 4 = 4/10 = 40%
 *      chance the enemy will win in a fight.
 *    - When losing to an enemy, whether from
 *      RUNNING or FIGHTING, the player's health will
 *      be decreased by the enemy's danger value.
 *
 * 4. When RUNNING from an enemy, there is always a
 * 50/50 chance the player will win, no matter the
 * current enemy's danger value.
 *    - But if enemy wins, its danger value will be
 *      subtracted from the player's total health points.
 *    - And if the player wins, they'll be awarded 1/2 of
 *      the enemy's award point value (only defeat by
 *      fighting earns full enemy point value).
 *
 * 5. When a player chooses to COWER, it will always be
 * the same result.
 *    - The player loses only 1 health point, no matter
 *      the enemy.
 *    - No points are awarded to the player's score.
 *
 * 6. Scoring.
 *    - FIGHTING and defeating an enemy will give the
 *      player that enemy's full award point value.
 *    - RUNNING and successfully escaping will give the
 *      player 1/2 of that enemy's award point value.
 *    - BONUS 1: 100 addtional points for killing all
 *      enemies.
 *    - BONUS 2: 50 addtional points for never running.
 *    - BONUS 3: 25 addtional points for never cowering.
 *
 * 7. Strategic reasoning for scoring and bonuses.
 *    - If the player reaches 100 points, they win and
 *      can't accumulate any more points. This allows the
 *      player to win, but not necessarily accumulate as
 *      many total points as someone who took more risks.
 *    - Since running is always 50/50, the player could
 *      choose to run from any enemy with a danger value
 *      greater than 5 and have a higher chance of winning
 *      the game; however, this won't achieve the highest
 *      score.
 *    - Ultimately, winning by always choosing to fight
 *      and never running will award the highest total point
 *      value. This would also be the highest risk.
 */

/* === INTRO ================== */

display.clear();

display.br();

display.titleScreen();

display.br();

display.msg("👍 Welcome to Jason's Game. See if you can kill all of his exes, or at least survive them long enough to make it out alive.", "deepskyblue");

display.br();

display.ask('What is your name?', function(input){
    player.update('name', input);
});

display.br();

display.msg(`Thanks, ${player.name}. Let's get started. At any point in the game, enter 'p' to print your scorecard or 'q' to quit the game.`);

display.br();

/* === BEGIN GAME ============= */

action.continue(); // Recursively iterates on itself.
