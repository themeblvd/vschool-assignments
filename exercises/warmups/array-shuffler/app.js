/**
 * Array Shuffler
 *
 * Write a function that takes an array as a parameter
 * and returns a new array with the contents randomly
 * "shuffled".
 *
 * @link https://coursework.vschool.io/array-shuffler/
 */
function shuffle(arr) {
    var shuffled = [];

    while (shuffled.length < arr.length) {
        let randomIndex = Math.floor(Math.random() * arr.length);

        if (!shuffled.includes(arr[randomIndex])) {
            shuffled.push(arr[randomIndex]);
        }
    }

    return shuffled;
}

console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle(["dog", "cat", "bird", "horse"]));
