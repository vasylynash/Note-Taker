const fs = require("fs");
const NotesStorage = require("../src/notesStorage");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(new NotesStorage().getAll());
    });

    app.post("/api/notes", (req, res) => {
        const note = req.body;
        res.json(new NotesStorage().add(note));
    });

    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        new NotesStorage().delete(id);
        res.json({});
    });
};