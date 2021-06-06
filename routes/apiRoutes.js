const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            let notes = JSON.parse(data);
            const note = req.body;
            note.id = uuidv4();
            notes.push(note);
            fs.writeFile("./db/db.json", JSON.stringify(notes, 0, 2), (err) => {
                err ? res.json("Error") : res.json({});
            });
        });
    });

    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            let notes = JSON.parse(data);
            const id = req.params.id;
            notes = notes.filter(el => el.id !== id);
            fs.writeFile("./db/db.json", JSON.stringify(notes, 0, 2), (err) => {
                err ? res.json("Error") : res.json({});
            });
        });
    });
};