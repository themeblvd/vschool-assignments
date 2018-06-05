const express = require("express");
const server = express();
const fruits = require("./fruits");

server.get("/fruits", (request, response) => {
    const params = request.query;

    var filteredFruits = fruits.filter(fruit => {
        for (let prop in params) {
            if (fruit.hasOwnProperty(prop)) {
                if (params[prop] !== fruit[prop]) {
                    return false;
                }
            }
        }
        return true;
    });

    response.send(filteredFruits);
});

server.get("/fruits/:id", (request, response) => {
    var fruit = fruits.find(fruit => fruit.id === request.params.id);
    response.send(fruit);
});

server.listen(8000, () => {
    console.log("Server is running on port 8000.");
});
