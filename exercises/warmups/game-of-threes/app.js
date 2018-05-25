/**
 * Game of Threes
 *
 * Write a recursive function that takes two integers, n and
 * counter as parameters and does the following:
 *
 * 1) If the n is divisible by three, divide it by three and
 * call the function again, providing the new value as n and counter + 1 as counter
 *
 * 2) If not, either add or subtract 1 to a get a new value
 * that is divisible by three and repeat step 1.
 *
 * 3) If n is one, simply return the value counter.
 *
 * @link https://coursework.vschool.io/game-of-threes
 */

function gameOfThree(num, counter = 0) {
    if (num % 3 === 0) {
        return gameOfThree(num / 3, counter + 1);
    } else if (num === 1) {
        return counter;
    } else {
        num = (num + 1) % 3 === 0 ? num + 1 : num - 1;
        return gameOfThree(num / 3, counter + 1);
    }
}

console.log(gameOfThree(30500));
