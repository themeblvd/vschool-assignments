/**
 * Two Sum
 *
 * Given an array of integers and a target integer, return
 * the indices of the FIRST two numbers which add up to the
 * target.
 *
 * Assume the same element may not be used twice.
 */

function twoSum(arr, num) {
    var final = [];
    var total = arr.length * 2;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === num && i + j < total) {
                total = i + j;
                final = [i, j];
            }
        }
    }

    return final.length ? final : false;
}

console.log(twoSum([1, 2, 3], 4)); // => [0, 2] (because 1 + 3 = 4)
console.log(twoSum([1, 2, 5], 10)); // => false
console.log(twoSum([1, 6, 2, 3, 4], 10)); // => [1, 4] (because 6 + 4 = 10)
console.log(twoSum([7, 4, 18, 4, 3, 1, 21], 8)); // => [1, 3]
