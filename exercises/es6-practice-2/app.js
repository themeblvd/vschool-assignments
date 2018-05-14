/**
 * ES6 Practice - Object Literals, Destructuring,
 * Rest and Spread Operators
 */

// 1. Use the Rest Operator to help this function return an
// array of animals, no matter how many animals are passed
// to it:

function collectAnimals(...animals) {
    return animals;
}

console.log( collectAnimals("dog", "cat", "mouse", "jackolope", "platypus") );
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 2. Make a food object with the array names as properties
// using Object Literals:

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = { fruit, sweets, vegetables };

console.log(food);

// 3. Use destructuring to fill in the blanks and use the
// property names as variables:

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

var {location, duration} = vacation;

console.log(`We're going to have a good time in ${location} for ${duration}`)

// 4. Use destructuring to make this code ES6:

var items = ['dog', 'cat', 'bunny'];

// const firstItem = items[0];

var [first] = items;

console.log(first);

// 5. Use destructuring to make this code ES6:

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

var [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`);

// 6. Use the Rest and Spread Operator to help take any
// number of arrays, and return one array. You will need
// to change how the arrays are passed in.

function combineAnimals(...arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = [ ...newArr, ...arr[i] ];
    }
    return newArr;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 7. Try to make the following function more ES6xy:

/*
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
*/

function product(numbers) {
    return numbers.reduce( (acc, number) => acc * number, 1)
}


// 8. Make the following function more ES6xy. Use at
// least both the rest and spread operators:

/*
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, ...add) {
    return [...array, ...add];
}

console.log(unshift(['dog', 'cat'], 'bunny', 'fish'));
