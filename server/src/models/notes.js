const mongoose = require('mongoose');
const User = require('./user');

const noteSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
