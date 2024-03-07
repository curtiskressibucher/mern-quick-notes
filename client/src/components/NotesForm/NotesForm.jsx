import { useState } from 'react';
import { getToken } from '../../utilities/users-service';

export default function NotesForm({ user, addNote }) {
    const [text, setText] = useState('');

    const handleSubmit = async (event) => {
        const token = getToken();
        const newNote = { text, user };
        console.log(newNote);
        event.preventDefault();

        const response = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newNote),
        });

        if (response.ok) {
            const addedNote = await response.json();
            addNote(addedNote);
            setText('');
        }
    };

    return (
        <div>
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder='Enter your note'
                />
                <button type='submit'>Add Note</button>
            </form>
        </div>
    );
}
