// Dependecies
const friends = require("../data/friends");
const express = require('express');
const router = express.Router();

// Get the data for all friends
router.get("/friends", function (req, res) {
    res.json(friends);
});

// Add a new friend to the friends data
router.post("/friends", function (req, res) {
    let friend = req.body;

    // Add new friend to the data
    friends.push(friend);

    // Send a success status
    res.status(200);
});

// Export the router with the routes
module.exports = router;