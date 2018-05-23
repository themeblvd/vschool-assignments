/**
 * Adjacent Difference
 *
 * Given an array of strings, find the 3 adjacent elements
 * with the longest combined length. Return them in the
 * form of an array.
 *
 * @link https://coursework.vschool.io/adjacent-difference/
 */

function adjacentDifference(input) {
    var output = ["", "", ""];

    for (let i = 0; i < input.length - 2; i++) {
        if (
            input[i].length + input[i + 1].length + input[i + 2].length >
            output[0].length + output[1].length + output[2].length
        ) {
            output = [input[i], input[i + 1], input[i + 2]];
        }
    }

    return output;
}

console.log(adjacentDifference(["this", "is", "an", "array"]));

console.log(adjacentDifference(["donkey", "dog", "a", "cat"]));
