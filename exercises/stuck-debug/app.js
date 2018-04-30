var ask = require("readline-sync");
var options = ['pick flowers', 'shoot guns', 'fight bears'];
var selected;
var run = true;

while ( run ) {

    selected = ask.keyInSelect( options, "What would you like to do today?: ");

    switch ( selected ) {

        case 0: // pick flowers
            console.log("You pick some flowers. You make a bouquet.");
            break;

        case 1: // shoot guns
            console.log("You shoot guns.")
            break;

        default: // fight bears or cancel
            run = false;

    }
}

console.log("You fought a bear and got beat up!");
