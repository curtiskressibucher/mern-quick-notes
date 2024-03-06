import { useState } from 'react';

export default function NotesForm({ user, setUser }) {
    const [text, setText] = useState('');

    console.log(user);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, user }),
        });

        if (response.ok) {
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
