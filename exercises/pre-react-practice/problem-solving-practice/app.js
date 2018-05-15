// 1. Write a function that takes an array of numbers
// and returns the largest (without using Math.max())

function largest( arr ) {

    var largest = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > largest ) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log( largest( [3, 5, 2, 8, 1] ) ); // 8

// 2. Write a function that takes an array of words and a
// character and return each word that has that letter present.

function lettersWithStrings( arr, char ) {

    var words = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i].indexOf(char) > -1 ) {
            words.push( arr[i] );
        }
    }

    return words;
}

console.log( lettersWithStrings( ["#3", "$$$", "C%4!", "Hey!"], "!") ); // ["C%4!", "Hey!"]

// 3. Write a function that takes a num1 and num2 and returns
// whether num1 is divisible by num2.

function isDivisible( num1, num2 ) {
    return num1 % num2 === 0;
}

console.log( isDivisible(4, 2) ); // true
console.log( isDivisible(9, 3) ); // true
console.log( isDivisible(15, 4) ); // false
