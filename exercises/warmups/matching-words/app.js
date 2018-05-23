/**
 * No Duplicates
 *
 * Given a string, your task is to remove any duplicated
 * letters from it. Any letters you remove should be added
 * to another string called "duplicates".
 *
 * @link https://coursework.vschool.io/no-duplicates/
 */

function duplicates(str){

    return str.split(' ')
        .filter(function(word, i, all){ // Get all occrences of duplicates, i.e. ['foo', 'foo'].
            return i != all.indexOf(word);
        })
        .filter(function(word, i, all){ // Get a unique list of those duplicate occrences, i.e. ['foo'].
            return i == all.indexOf(word);
        });

}

console.log(duplicates('foo bar baz foo foo foo')); // ["foo"]

console.log(duplicates("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."));
