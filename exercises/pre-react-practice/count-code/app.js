function countCode(str) {
    var match = str.match( /co.e/g );
    return match ? match.length : 0;
}

console.log(countCode("balls")) // 0
console.log(countCode("aaacodebbb")) // 1
console.log(countCode("codexxcode")) // 2
console.log(countCode("cozexxcope")) // 2
