/**
 * Write two functions that mimic the .every and .some
 * array methods.
 *
 * @link https://coursework.vschool.io/every-and-some/
 */

// Mimic arr.every()

function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(
    every([1, 2, "3"], num => {
        return typeof num === "number";
    })
); // => false

// Mimic arr.some()

function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

console.log(
    some(["ben", "jacob", "bob"], name => {
        return name === "jacob";
    })
); // => true
