function APIRoutes(app, friends) {
    this.addRoutes = function () {
        app.get("/api/friends", function (req, res) {
            res.json(friends);
        });

        app.post("/api/friends", function (req, res) {
            let friend = req.body;
            friends.push(friend);

            res.status(200);
        });
    }
}

module.exports = APIRoutes;