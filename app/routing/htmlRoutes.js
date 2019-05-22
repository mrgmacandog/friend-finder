// Dependecies
const path = require("path");
const express = require('express');
const router = express.Router();

// Send user home.html at root
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Send user survey.html at /survey
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Redirect user to root at any other route
router.get('*', function (req, res) {
    res.redirect('/');
});

// Export the router with the routes
module.exports = router;