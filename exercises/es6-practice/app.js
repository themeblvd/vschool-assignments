/**
 * ES6 Practice
 *
 * @link https://coursework.vschool.io/es6-practice-let-const-fat-arrow-functions-default-arguments-template-literals/
 */

// Use let and const and try to use these new features
// Replace all the vars with let and const

/*
var name = 'John'
var age = 101
var pets = ["cat", "dog"]

var petObjects = []

for (var i = 0; i < pets.length; i++){
    var pet = {type: pets[i]}
    if (pets[i] === "cat"){
        var name = "fluffy"
    } else {
        var name = "spot"
    }
    pet.name = name
    petObjects.push(pet)
}
*/

const ownerName = 'John';
const ownerAge = 101;
var pets = ["cat", "dog"]; // Could be const, but for readability since items my change, don't use const like a ES6 follower.

const petObjects = [];

for (let i = 0; i < pets.length; i++){
    let pet = {type: pets[i]}
    if (pets[i] === "cat"){
        pet.name = "fluffy";
    } else {
        pet.name = "spot";
    }
    petObjects.push(pet);
}

// Re-write this .map() using a fat arrow function.

carrots = ['foo', 'bar'];

var vegetables = carrots.map(function(carrot){
    return {type: "carrot", name: carrot}
});

var vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}));

// Re-write this .filter() using a fat arrow function.

var people = [
    {
        name: "John",
        friendly: false
    },
    {
        name: "Alex",
        friendly: true
    }
];

var friends = people.filter(function(person){
    return !!person.friendly
});

var friends = people.filter(person => !!person.friendly);

// Re-write the following functions to be fat arrow
// functions:

function doMathSum(a, b){
    return a + b
}

var produceProduct = function(a, b){
    return a * b
}

var doMathSum = (a, b) => a + b;

var produceProduct = (a, b) => a * b;

// Write a function that takes a firstName, a lastName,
// an age and returns a string like the following:
// `Hi Kat Stark, how does it feel to be 40?`

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

function getStr(fName = "Jane", lName = "Doe", age = 100) {
    return `Hi ${fName} ${lName}, how does it feel to be ${age}?`;
}

// YUCK! If you're doing the following, you're over-using
// arrow functions... and it's not making you any more cool.
// var getStr = (fName = "Jane", lName = "Doe", age = 100) => `Hi ${fName} ${lName}, how does it feel to be ${age}?`;

console.log(getStr());
console.log(getStr('Kat', 'Stark', 40));

// Use the shorthand syntax to make the following code block
// take up one line.

var animals = ['dog', 'cat', 'bird'];

var dogs = animals.filter((animal)=>{
    if (animal.type === "dog"){
        return true;
    } else {
        return false;
    }
})

var dogs = animals.filter(animal => animal.type === "dog" ? true : false);

// Write a function that will take location and name and output this
// if location="Hawaii" and name="Janice":

function msg(name, location) {
    if (name == 'Janice' && location == 'Hawaii') {
        return `Hi ${name}!\nWelcome to Hawaii.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
    } else {
        return '';
    }
}

console.log(msg('Janice', 'Hawaii'));
console.log(msg('Jane', 'Maui'));
