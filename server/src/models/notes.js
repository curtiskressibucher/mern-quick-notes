const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            maxlength: 150,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
