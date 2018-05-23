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
