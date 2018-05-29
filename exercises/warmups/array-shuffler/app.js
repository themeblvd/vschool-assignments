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
