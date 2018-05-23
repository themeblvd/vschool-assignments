/**
 * Balance Parentheses
 *
 * Given a string including parentheses, write a function
 * that returns true if every opening parenthesis has a
 * closing parenthesis.
 *
 * Also, every closing parentheses needs an opening partner
 * before it.
 *
 * @link https://coursework.vschool.io/balance-parenthesis/
 */

function balanceParentheses(str) {
    var open = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            open.push(str[i]);
        } else if (str[i] == ")") {
            if (!open.pop()) {
                return false;
            }
        }
    }

    return open.length === 0;
}

// console.log(balanceParentheses("((("));

console.log(balanceParentheses("()()()")); // => true
console.log(balanceParentheses("(())")); // => true
console.log(balanceParentheses("()))")); // => false
console.log(balanceParentheses(")()(")); // => false
console.log(balanceParentheses("())(")); // => false
console.log(balanceParentheses(")()")); // => false
console.log(balanceParentheses("((((((()))))))")); // => true
