var things = [
    {
        type: "water bottle",
        brand: "Camelbak",
        color: "black",
        isEmpty: false,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "coffee mug",
        brand: "Starbucks",
        color: "silver",
        isEmpty: false,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "iPhone",
        brand: "Apple",
        color: "black",
        hasCase: true,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "monitor",
        brand: "Asus",
        color: "black",
        isHiRes: false,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "projector",
        brand: "Unknown",
        color: "black",
        isHiRes: false,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "back pack",
        brand: "North Face",
        color: "grey",
        hasYellow: true,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "shoes",
        brand: "Nike",
        color: "red",
        isComfy: true,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "chair",
        brand: "Unknown",
        color: "white",
        isComfy: true,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "MacBook",
        brand: "Apple",
        color: "silver",
        hasGoodKeyboard: false,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    },
    {
        type: "sweat shirt",
        brand: "Gap",
        color: "blue",
        isComfy: true,
        about: function() {
            console.log( `I'm a ${this.color}, ${this.brand} ${this.type}.` );
        }
    }
];

things.forEach( function( thing ) {
    thing.about();
} );
