const Note = require('../models/notes');

async function create(req, res) {
    try {
        const user = req.user;
        const { text } = req.body;

        const newNote = new Note({ text, user: user.sub });
        const savedNote = await newNote.save();

        res.json(savedNote);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function show(req, res) {
    try {
        const user = req.user;
        const notes = await Note.find({ user: user.sub });

        res.json({ notes });
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {
    create,
    show,
};
