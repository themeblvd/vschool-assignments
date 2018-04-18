var shopper = {
    name: "John Smith",
    age: 42,
    ischeckedOut: false,
    groceryCart: ['bread', 'milk', 'cheese'],
    getCartQuantity: function() { return this.groceryCart.length }
};

console.log( shopper.getCartQuantity() );
