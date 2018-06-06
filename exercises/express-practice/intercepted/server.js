const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var dogs = [
    {
        name: "Sarah",
        color: "Black"
    },
    {
        name: "Jangles",
        color: "Grey"
    },
    {
        name: "Snuggles",
        color: "Brown"
    }
];

app.use(bodyParser.json());

app.use(function(req, res, next) {
    dogs = dogs.map(dog => {
        dog.isFurry = dog.isFurry ? false : true; // Flip value on each request.
        return dog;
    });
    next();
});

app.get("/dogs", function(req, res, next) {
    res.send(dogs);
});

app.listen(8000, () => {
    console.log("Server running on port 8000...");
});
