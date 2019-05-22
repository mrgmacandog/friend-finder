// Dependecies
// const path = require("path");
const express = require("express");
// const friends = require("./app/data/friends");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes")

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use API Routes
app.use("/api", apiRoutes);

// Use HTML Routes
app.use("/", htmlRoutes);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});