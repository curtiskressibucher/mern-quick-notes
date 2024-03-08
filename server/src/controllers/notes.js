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

async function handleDelete(req, res) {
    try {
        const user = req.user;
        const noteId = req.params.id;

        console.log('User ID:', user.sub);
        console.log('Note ID to delete:', noteId);

        // Find the note by ID and the logged-in user
        const note = await Note.findOne({ _id: noteId, user: user.sub });

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        // Delete the note
        await Note.findByIdAndDelete(noteId);

        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    create,
    show,
    handleDelete,
};
