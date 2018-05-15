/**
 * Multiple Array Methods Practice Part 1
 *
 * @link https://coursework.vschool.io/multiple-array-methods-practice-1/
 */

var people = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];

// 1) Return a list of everyone older than 18 sorted
// alphabetically by last name.

function sortedOfAge(arr){
    arr = arr.filter( person => person.age > 18);
    arr = arr.sort( (a, b) => a.lastName.localeCompare(b.lastName));
    return arr;
}

console.log( sortedOfAge( people ) );

// 2) Using the same array from the problem above, return a
// sorted list, oldest to youngest, of People in <li>s

function toDisplayInHTML(arr){
    arr = arr.sort( (a, b) => b.age - a.age );
    arr = arr.map( person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>` );
    return arr;
}

console.log( toDisplayInHTML(people) );  //==> ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]
