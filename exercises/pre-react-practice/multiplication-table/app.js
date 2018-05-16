console.log(multTable());

console.log(multTable(5, 5));

function multTable(x = 10, y = 10) {

    var table = [];

    for (let i = 1; i <= x; i++) {

        table.push([]);

        for (let j = 1; j <= y; j++) {
            table[i - 1].push(j * i);
        }
    }

    return table;
}
