const database = [
    { firstName: "Jack", lastName: "Smith", age: 2 },
    { firstName: "Jill", lastName: "Johnson", age: 20 },
    { firstName: "Jill", lastName: "Smith", age: 100 },
    { firstName: "Jack", lastName: "White", age: 2 }
];

console.log(filterDatabase({}, database));

console.log(filterDatabase({ dolphin: "squeak!" }, database));

console.log(filterDatabase({ firstName: "Jack", age: 2 }, database));

function filterDatabase(query, database) {
    if (!Object.keys(query).length) {
        return false;
    }

    return database.filter(entry => {
        for (let prop in query) {
            if (query.hasOwnProperty(prop)) {
                if (entry[prop] !== query[prop]) {
                    return false;
                }
            }
            return true;
        }
    });
}
