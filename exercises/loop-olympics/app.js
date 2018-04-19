// Preliminaries
for ( let i = 0; i < 10; i++ ) {
    console.log( i );
}

for ( let i = 9; i >= 0; i-- ) {
    console.log( i );
}

let fruits = ["banana", "orange", "apple", "kiwi"];

for ( let i = 0; i < fruits.length; i++ ) {
    console.log( fruits[i] );
}

// Bronze Medal
let numbers = [];

for ( let i = 0; i < 10; i++ ) {
    numbers.push( i );
}

for ( let i = 0; i <= 100; i++ ) {
    if ( i % 2 == 0 ) {
        console.log( i );
    }
}

let newFruits = [];

for ( let i = 0; i < fruits.length; i++ ) {
    if ( i % 2 == 0 ) {
        newFruits.push( fruits[i] );
    }
}

// Silver Medal
let peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
];

for ( let i = 0; i < peopleArray.length; i++ ) {
    console.log( peopleArray[i].name );
}

let names = [];
let occupations = [];

for ( let i = 0; i < peopleArray.length; i++ ) {
    names.push( peopleArray[i].name );
    occupations.push( peopleArray[i].occupation );
}

names = ['Harrison Ford'];
occupations = ['Singer'];

for ( let i = 0; i < peopleArray.length; i++ ) {

    if ( i % 2 == 0 ) {
        names.push( peopleArray[i].name );
        occupations.push( peopleArray[i].occupation );
    }
}

// Gold Medal
let grid = [];

for ( let i = 0; i < 3; i++ ) {

    let innerGrid = [];

    for ( let j = 0; j < 3; j++ ) {
        innerGrid.push( 0 );
    }

    grid.push( innerGrid );

}

// console.log( grid );

grid = [];

for ( let i = 0; i < 3; i++ ) {

    let innerGrid = [];

    for ( let j = 0; j < 3; j++ ) {
        innerGrid.push( i );
    }

    grid.push( innerGrid );

}

// console.log( grid );

grid = [];

for ( let i = 0; i < 3; i++ ) {

    let innerGrid = [];

    for ( let j = 0; j < 3; j++ ) {
        innerGrid.push( j );
    }

    grid.push( innerGrid );

}

// console.log( grid );

grid = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
];

for ( let i = 0; i < grid.length; i++ ) {

    for ( let j = 0; j < grid[i].length; j++ ) {
        grid[i][j] = 'x';
    }
}

// console.log( grid );
