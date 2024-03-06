const Note = require('../models/notes');
const User = require('../models/user');

async function create(req, res) {
    try {
        const user = req.user;
        console.log(user);
        const { text } = req.body;

        const newNote = new Note({ text });

        console.log(newNote);

        const savedNote = await newNote.save();

        res.json(savedNote);
        console.log(savedNote);
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {
    create,
};
