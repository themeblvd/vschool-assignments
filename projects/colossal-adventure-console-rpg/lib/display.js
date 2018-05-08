var readline = require('readline-sync');
var figlet = require('figlet');
var chalk = require('chalk');
var player = require('./player');
var enemies = require('./enemies');

const display = {};

/**
 * Display a message, that involves no user
 * input.
 *
 * @var {String}  msg       Message to display.
 * @var {String}  style     Styling keyword.
 * @var {String}  context   Context, `box` or nothing.
 * @var {Boolean} disableLb Whether to disable line breaks.
 */
display.msg = function(msg, style, context, disableLb) {

    if (! disableLb) {
        msg = this.format(msg, context);
    } else {
        msg = "\t" + msg;
    }

    if (context == "box") {
        msg = msg.replace("\t", "\t "); // Box text gets indented in a space.
    }

    if (style) {
        console.log(chalk.keyword(style)(msg));
    } else {
        console.log(msg);
    }
};

/**
 * Display the header for a box.
 *
 * @var {String} title Title for box.
 * @var {String} color Color for box header.
 */
display.boxHeader = function(title, color) {

    var total = 45; // Matches display.boxFooter() length.

    title = `== ${title.toUpperCase()} `;

    for (let i = title.length; i < total; i++) {
        title += '=';
    }

    title = chalk.keyword(color)(title);

    title = "\n\t" + title + "\n";

    console.log(title);

};

/**
 * Display the footer for a box.
 *
 * @var {String} color Color for box footer.
 */
display.boxFooter = function(color){

    var footer = "=============================================";

    if (color) {
        footer = chalk.keyword(color)(footer);
    }

    console.log(`\n\t${footer}\n`);

};

/**
 * Asks the user for an input.
 *
 * @var {String}   question Question text.
 * @var {Function} callback Callback function, for when complete.
 * @var {Array}    limit    Keys to limit pressed from user.
 */
display.ask = function(question, callback, limit) {

    var input = null;

    question = this.format(question);
    question += ": ";

    if (limit) {
        input = readline.keyIn(question, {
            limit: limit
        });
    } else {
        input = readline.question(question);
    }

    callback(input);

};

/**
 * Give user a selection.
 *
 * We can't use readline's keyInSelect because
 * of our game's visual formatting.
 *
 * @var {String}   question Question text.
 * @var {Array}    options  Options to select from.
 * @var {Function} callback Callback function, for when complete.
 */
display.select = function(msg, options, callback){

    msg = this.format(msg);
    msg += "\n\n";

    for (let i = 0; i < options.length; i++) {
        msg += `\t[${i + 1}] ${options[i]}\n`;
    }

    msg += "\n\t";

    var input = readline.keyIn(msg, {
        limit: `$<1-${options.length}>`
    });

    callback(options[ input - 1 ]);

};

/**
 * Print the player's scoreboard and stats.
 */
display.print = function() {

    var color = 'deepskyblue';

    var didWin = ! player.isPlaying() && player.score >= 100 ? true : false;

    var health = player.health >= 0 ? player.health : 0;

    var remaining = player.remainingEnemies(enemies);

    var score = didWin && remaining == 'None' ? player.score + 100 : player.score;

    this.boxHeader('👨 Player Score', color);

    this.msg(`Name: ${player.name}`, null, "box");
    this.msg(`Health: ${health}`, null, "box");
    this.msg(`Times you fought: ${player.fought}`, null, "box");

    if (didWin && ! player.ran){ // Never ran away => 25 bonus.
        score += 25;
        this.msg(`Times you ran: ${player.ran} ... +25 BONUS`, null, "box");
    } else {
        this.msg(`Times you ran: ${player.ran}`, null, "box");
    }

    if (didWin && ! player.cowered){ // Never cowered => 50 bonus.
        score += 50;
        this.msg(`Times you cowered: ${player.cowered} ... +50 BONUS`, null, "box");
    } else {
        this.msg(`Times you cowered: ${player.cowered}`, null, "box");
    }

    this.msg(`Defeated: ${player.defeatedEnemies(enemies)}`, null, "box");

    if (remaining == 'None') {
        this.msg(`Enemies Left: ${remaining} ... +100 BONUS`, null, "box");
    } else {
        this.msg(`Enemies Left: ${remaining}`, null, "box");
    }

    this.br();

    score = chalk.keyword('yellow')(`SCORE: ${score}`);

    if ( ! player.isPlaying() ) {
        score += player.score >= 100 ? " 👍" : " 👎";
    }

    this.msg(chalk.bold(score), null, "box");

    this.boxFooter(color);

};

/**
 * Display an enemy in a big, fancy box.
 *
 * @var {Object}  enemy             Character properties.
 * @var {String}  enemy.name        Name.
 * @var {String}  enemy.description Character bio.
 * @var {Number}  enemy.danger      Danger level out of 10.
 * @var {Number}  enemy.points      Points received for killing.
 * @var {Boolean} enemy.isAlive     Whether still alive.
 */
display.enemy = function(enemy) {

    this.boxHeader("Danger!", "red");

    var advice = `Her danger level is a ${enemy.danger}/10... but if you kill her, it'll score you ${enemy.points} points.`;

    var print = "";

    print += `\t 👩 Say hello to ${chalk.bold(enemy.name)}.`;
    print += "\n\n\t ";
    print += this.splitByLine(enemy.description).join("\n\t ");
    print += "\n\n\t ";
    print += this.splitByLine(advice).join("\n\t ");

    console.log(print);

    this.boxFooter("red");

};

/**
 * Format the text to make sure lines don't
 * run too long.
 *
 * @var {String} msg     Text to format.
 * @var {String} context Message context, `box` or nothing.
 */
display.format = function(msg, context) {

    var glue = context == "box" ? "\n\t " : "\n\t";

    return '\t' + this.splitByLine(msg).join(glue);
};

/**
 * Split a long message into an array of
 * shorter lines.
 *
 * @var    {String} msg Message to split up.
 * @return {Array}      Lines of message.
 */
display.splitByLine = function(msg) {

    var limit = 40;
    var lines = [];
    var start = 0;

    for (let i = 0; i < msg.length; i++) {
        if (i > limit && msg[i] === ' ') {
            lines.push(msg.slice(start, i));
            limit += limit;
            start = i + 1;
        } else if (i === msg.length - 1) {
            lines.push(msg.substr(start, i + 1));
        }
    }

    return lines.map( line => line.trim() );
};

/**
 * Display the game's main title screen.
 */
display.titleScreen = function(){
    console.log(figlet.textSync("Evil Exes"));
};

/**
 * Display the game's ending screen for the
 * player, when they're a LOSER.
 */
display.loserScreen = function(){
    console.log(figlet.textSync("Game Over"));
};

/**
 * Display the game's ending screen for the
 * player, when they're a LOSER.
 */
display.winnerScreen = function(){
    console.log(figlet.textSync("Winner"));
};

/**
 * Display walk animation.
 *
 * @var {String}   action   How character is moving, `walk`, `run`, or `fight`.
 * @var {Number}   speed    Animation speed in milliseconds.
 * @var {Function} callback Callback function, for when complete.
 */
display.moveAnimation = function(action, speed, callback) {

    // happy: "😀"
    // not happy: "😟"
    // nervous: "😬"
    // man: "👨"
    // womain: "👩"
    // run: "🏃"
    // tree: "🌲"

    var animations  = [],
        frames      = action == "fight" ? 6 : 7,
        rows        = 6,
        charsPerRow = 9,
        face        = "😀",
        start       = action == "run" ? -4 : 0;

    if (action == "run") {
        face = "😟";
    } else if (action == "fight") {
        face = "😬";
    }

    for (let i = start; i < frames; i++) {

        let str = "";

        for (let j = 0; j < rows; j++) {

            let start  = j % 2 === 0 ? chalk.keyword('brown')("/") : chalk.keyword('brown')("\\"),
                end    = j % 2 === 0 ? chalk.keyword('brown')("/") : chalk.keyword('brown')("\\"),
                middle = j === i - 1 ? face : '  ';

            if (action == "run" && j - 3 === i) {
                middle = "👩"; // Will chase player, 2 spots behind.
            }

            if (action == "fight" && j === rows - 1) {
                middle = "👩"; // Will be waiting at bottom.
            }

            if (j === 1) {
                str += `\t\t\t${start} 🌲${middle}   ${end}\n`;
            } else if (j === 3) {
                str += `\t\t\t${start}   ${middle}🌲 ${end}\n`;
            } else {
                str += `\t\t\t${start}   ${middle}   ${end}\n`;
            }
        }

        animations.push(str);
    }

    if (action == 'run') { // run => Means running away in opposite direction.
        animations.reverse();
    }

    var i = 0;

    var loop = setInterval(function(){

        display.clear();

        console.log(animations[i]);

        if (i === animations.length - 1) {
            clearInterval(loop);
            callback();
        } else {
            i++;
        }

    }, speed);

};

/**
 * Display a mesage, to tell the user we
 * don't know what command they're trying
 * to do.
 *
 * @var    {String} type The type of message to display.
 * @return {String}      Message.
 */
display.randomMsg = function(type){

    switch (type) {

        case 'lostFight':
            var messages = [
                "Oh damn, she got you even worse than when she stole Jason's couch.",
                "Shit, that's gotta hurt. Jason's been there.",
                "Wow, she did a number on you... pretty much like she did to Jason.",
                "Ouch, I wouldn't blame you if you couldn't get up after that one.",
                "Maybe you just want to stay down. Jason got his ass kicked by her one time, too."
            ];
            break;

        case 'wonFight':
            var messages = [
                "You got her good! Way to take her down.",
                "Victory. That a way, son!",
                "Like a champ, you won that battle.",
                "She dead. Good work."
            ];
            break;

        case 'ranAway':
            var messages = [
                "Nice, you got away.",
                "She couldn't catch you.",
                "Live to fight another day.",
                "You got out of that one.",
                "Good thing she was wearing heals; you got away."
            ];
            break;

        case 'cowered':
            var messages = [
                "Yeah, sometimes you just gotta take it.",
                "We saw that coming. She got ya, but it coulda been worse.",
                "All right, you took the beating and now you just can move on.",
                "Sometimes, you just gotta play dead like you would with a bear. No judgement."
            ];
            break;

        default:
            return '';

    }

    var min    = 0,
        max    = messages.length - 1,
        random = display.randomMsgTracker[type];

    while (random == display.randomMsgTracker[type]) { // Prevents same msg getting displays twice in a row.
        random = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    display.randomMsgTracker[type] = random;

    return messages[random];

};

/**
 * Keeps track of the last unknown message
 * printed.
 */
display.randomMsgTracker = {
    lostFight: null,
    wonFight: null,
    ranAway: null
};

/**
 * Insert a line break.
 */
display.br = function() {
    console.log('\n');
};

/**
 * Clear the console screen.
 */
display.clear = function() {
    process.stdout.write('\u001b[2J');
    process.stdout.write('\u001b[1;1H');
};

module.exports = display;
