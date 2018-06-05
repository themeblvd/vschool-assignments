const express = require("express");
const bodyParser = require("body-parser");
const uniqueID = require("uuid/v1");
const app = express();

// Add 'body-parser' middleware, so that req.body
// will be parsed into an object we can use.
app.use(bodyParser.json());

// Example: localhost:8000/dogs
const dogs = [
    {
        id: "_dog_1",
        name: "Doug",
        color: "Brown",
        breed: "Husky"
    },
    {
        id: "_dog_2",
        name: "Mary",
        color: "white",
        breed: "poodle"
    }
];

// Find a dog in the above data by id.
function findDog(id) {
    return dogs.find(dog => dog.id === id);
}

// Handle incoming GET requests.
app.get("/dogs", (reqest, response) => {
    response.send(dogs);
});

// Handle incoming GET requests for specific item.
// All paramters from URL are included in request.params.
// Example: "/dogs/:id/:shade" => site.com/dogs/foo/bar => {id: 'foo', shade: 'bar'}
app.get("/dogs/:id", (request, response) => {
    response.send(findDog(request.params.id));
});

// Handle incoming POST requests.
app.post("/dogs", (request, response) => {
    request.body.id = uniqueID();
    dogs.push(request.body);
    response.send(request.body);
});

// Handle incoming PUT requests.
app.put("/dogs/:id", (request, response) => {
    const params = request.body;
    const dog = findDog(request.params.id);

    for (let prop in params) {
        if (params.hasOwnProperty(prop)) {
            dog[prop] = params[prop];
        }
    }

    response.send(dog);
});

// Handle incoming DELETE requests.
app.delete("/dogs/:id", (request, response) => {
    for (let key in dogs) {
        if (dogs[key].id === request.params.id) {
            dogs.splice(key, 1);
        }
    }
    response.send(dogs);
});

// Setup the port number. localhost:8000
app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});

// To start server:

// $: node server.js

// Or, $: nodemon server.js
// nodemon is installed globally and allows express to
// automatically restart when making changes in development
// environment to express setup.
