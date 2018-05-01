/**
 * forEach(), find(), findIndex(), some(), and every()
 * Wizard Battle Practice
 *
 * @link https://coursework.vschool.io/foreach-find-findindex-some-and-every-wizard-battle-practice/
 */

// Log to the console every Wizard in the array using forEach().

var wizardNames = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"];

wizardNames.forEach( function( wizard ) {
    console.log( wizard );
} );

// Using the following array, complete the following tasks in order.
// Some tasks will change the behavior of later tasks.

var wizards = [
    {
        name: "Edwin Odesseiron",
        age: 37,
        alignment: "lawful evil"
    },
    {
        name: "Harry Potter",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Hermony Granger",
        age: 21,
        alignment: "lawful good"
    },
    {
        name: "Ronny the Bear",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Gandalf",
        age: 100,
        alignment: "neutral good"
    }
];

// 1) Log to the console every wizard's name.

wizards.forEach( function( wizard ) {
    console.log( wizard.name );
} );

// 2) Add an isAlive property to every wizard, setting it to true.

wizards.forEach( function( wizard, i ) {
    wizards[i].isAlive = true;
} );

// 3) Make a new array of all the Wizards that are "neutral good".

var neutralGoodWizards = wizards.filter( wizard => wizard.alignment === 'neutral good' );

// 4) Find the index of a wizard that is "lawful good".

var lgWizardIndex = wizards.findIndex( wizard => wizard.alignment === 'lawful good' );

// 5) Return a Boolean that states whether or not all the wizards are alive.

var isAllAlive = ! wizards.find( wizard => ! wizard.isAlive ) ? true : false;

// 6) Return a Boolean that states whether or not at least one wizard is "neutral good".

var hasNeutralGood = wizards.some( wizard => wizard.alignment === 'neutral good' );

// 7) Check every "alignment" for every wizard. Kill every "neutral good" wizard.
// (Modify every "neutral good" wizard's isAlive property to false.)

wizards.forEach( function( wizard, i ) {
    if ( wizard.alignment === 'neutral good' ) {
        wizards[i].isAlive = false;
    }
} );

// 8) Return a Boolean that states whether or not all the wizards are alive.

var isStillAllAlive = ! wizards.find( wizard => ! wizard.isAlive ) ? true : false;

// 9) Return a Boolean that states whether or not some of the wizards are alive.

var isAlive = wizards.find( wizard => wizard.isAlive ) ? true : false;
