function HTMLRoutes(app) {
    this.addRoutes = function () {
        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });

        // Set route for survey page
        app.get("/survey", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        });
    }
}

module.exports = HTMLRoutes;