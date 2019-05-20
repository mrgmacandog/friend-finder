// Dependecies
const path = require("path");
const express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO move html routes to htmlRoutes.js
// ==============================================================
// Set route for home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// Set route for survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Redirect all other routes to the home page
app.get('*',function (req, res) {
    res.redirect('/');
});
// ==============================================================

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});