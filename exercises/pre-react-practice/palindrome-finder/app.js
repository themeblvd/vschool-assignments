
/**
 * Palindrome Finder
 *
 * Write a function that accepts a string as
 * an argument and returns true if the string
 * is a palindrome (the string is the same forward
 * and backward), or false if it is not.
 *
 * A string is still considered a palindrome despite
 * letter capitalization, spaces, or punctuation.
 *
 * @link https://coursework.vschool.io/palindrome-finder/
 */

function isPalindrome(str) {

    var arr = str.toLowerCase().split('').filter(function(char){
        return "abcdefghijklmnopqrstuvwxyz".indexOf(char) >= 0;
    });

    return arr.join('') === arr.reverse().join('');

}

console.log(isPalindrome("Star Rats!"));  // true
console.log(isPalindrome("palindrome"));  // false
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true
