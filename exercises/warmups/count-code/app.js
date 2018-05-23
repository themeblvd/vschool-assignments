/**
 * Count Code
 *
 * Write a function that returns the number of times
 * that the string "code" appears anywhere in the given
 * string, except we'll accept any letter for the "d",
 * so "cope" and "cooe" would also count. 
 *
 * @link https://coursework.vschool.io/count-code/
 */

function countCode(str) {
    var match = str.match( /co.e/g );
    return match ? match.length : 0;
}

console.log(countCode("balls")) // 0
console.log(countCode("aaacodebbb")) // 1
console.log(countCode("codexxcode")) // 2
console.log(countCode("cozexxcope")) // 2
