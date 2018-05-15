var dictionary = {
    /**
     * Add a word to the dictionary.
     */
    add: function( word, define ) {

        var add = false;

        if ( ! this.exists(word) ) {
            add = {
                word: word,
                define: define
            };
            this.entries.push(add);
        }

        return add;
    },
    /**
     * Check if a word, or a form of the word exists.
     */
    exists: function(word) {

        var find = this.entries.find(function(entry){
            return word.includes(entry.word);
        });

        return find ? true : false;
    },
    /**
     * Get the definition for a word.
     */
    define: function(word) {

        var define = false;

        for ( let i = 0; i < this.entries.length; i++ ) {
            if ( this.entries[ i ].word === word ) {
                define = this.entries[ i ].define;
            }
        }

        return define;
    },
    entries: [
        {
            word: "hat",
            define: "A thing worn on one's head."
        },
        {
            word: "bat",
            define: "A stick to be swung."
        }
    ],
};

// dictionary.add('cat', 'A furry animal.'); // New word, will get added.
//
// dictionary.add('hat', 'Head clothing.'); // Duplicate word, won't get added.
//
// dictionary.add('hats', 'More than one hat.'); // Duplicate variation, won't get added.
//
// console.log(dictionary.entries);

// console.log(dictionary.define('hat'));

module.exports = {dictionary};
