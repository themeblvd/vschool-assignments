var chai = require('chai');
var assert = chai.assert;
var dictionary = require('./app.js').dictionary;

describe( "Create dictionary that contains words.", function() {

    it( "Should add a word to the dictionary and return what was added or false if not added.", function() {
        assert.equal(
            JSON.stringify( dictionary.add( 'cat', 'A furry animal.' ) ),
            JSON.stringify( {word: 'cat', define: 'A furry animal.'} )
        );
    } );

    it( "Should return the definition of the word.", function() {
        assert.equal(
            dictionary.define( 'hat' ),
            "A thing worn on one's head."
        );
    } );

} );
