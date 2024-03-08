import { useState } from 'react';
import { getToken } from '../../utilities/users-service';
import './NotesForm.css';

export default function NotesForm({ user, addNote }) {
    const [text, setText] = useState('');

    const MAX_CHARACTER_LIMIT = 149;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = getToken();
        const newNote = { text, user };

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

    const handleChange = (event) => {
        setText(event.target.value);
        if (event.target.value.length > MAX_CHARACTER_LIMIT) {
            alert('Exceeds the character limit');
        }
    };

    return (
        <div className='form-container'>
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={text}
                    onChange={handleChange}
                    placeholder='Enter your note'
                />
                <button type='submit'>Add Note</button>
            </form>
        </div>
    );
}
