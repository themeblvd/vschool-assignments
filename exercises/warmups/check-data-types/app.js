/**
 * Check Data Types
 * 
 * Given a multi-dimensional array containing only
 * primitive data types (strings, booleans, and numbers),
 * write a function that returns whether EACH element within
 * each subarray belongs to the same data type.
 *
 * @link https://coursework.vschool.io/check-data-types/
 */

function checkTypes(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i][0] !== typeof arr[i + 1][0]) {
            return false;
        }
    }
    return true;
}

const multiD1 = [[1, 2, 3], ["a", "b", "c"], [true, true, true]];
console.log(checkTypes(multiD1));
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true, false, true], [false, false, true]];
console.log(checkTypes(multiD2));
// returns true (each inner array contains the same data type as the others)
