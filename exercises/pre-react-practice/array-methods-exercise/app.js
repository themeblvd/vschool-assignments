var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 1. Remove the last item from the vegetable array.

vegetables.pop();

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 2. Remove the first item from the fruit array.

fruit.shift();

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 3. Find the index of "orange."

var indexofOrange = fruit.indexOf('orange');

console.log( 'Index of "orange": ', indexofOrange );

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 4. Add that number to the end of the fruit array.

fruit.push( indexofOrange );

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 5. Use the length property to find the length of the vegetable array. Log that to the console.

console.log( vegetables.length );

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 6. Add that number to the end of the vegetable array.

vegetables.push( vegetables.length );

console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat( vegetables );

console.log( "food: ", food);
console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 8. Remove 2 elements from your new array starting at index 4 with one method.

food.splice( 4, 2 );

console.log( "food: ", food );
console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 9. Reverse your array.

food.reverse();

console.log( "food: ", food );
console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );

// 10. Log your array as a string to the console.

console.log( "food: ", food );
console.log( "fruit: ", fruit );
console.log( "vegetables: ", vegetables );
