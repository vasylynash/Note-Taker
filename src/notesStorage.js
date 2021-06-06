const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DB_PATH = path.join(__dirname, "./db/db.json");

class NotesStorage {

    getAll() {
        return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    };

    add(note) {
        const notes = this.getAll();
        note.id = uuidv4();
        notes.push(note);
        this.writeToFile(notes);
        return note;
    };

    delete(id) {
        let notes = this.getAll();
        notes = notes.filter(el => el.id !== id);
        this.writeToFile(notes);
    };

    writeToFile(notes) {
        fs.writeFileSync(DB_PATH, JSON.stringify(notes, 0, 2));
    };
}

module.exports = NotesStorage;