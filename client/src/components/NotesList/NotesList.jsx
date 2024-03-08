import { useState } from 'react';
import { getToken } from '../../utilities/users-service';
import './NotesList.css';

export default function Notes({ notes, setNotes }) {
    const [ascendingOrder, setAscendingOrder] = useState(true);

    const toggleOrder = () => {
        setAscendingOrder(!ascendingOrder);
    };

    const handleDeleteNote = async (noteId) => {
        const token = getToken();
        const response = await fetch(`/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(),
        });
        if (response.ok) {
            setNotes(notes.filter((note) => note._id !== noteId));
        } else {
            throw alert('Failed to delete note');
        }
    };

    const sortedNotes = [...notes].sort((a, b) => {
        if (ascendingOrder) {
            return new Date(a.createdAt) - new Date(b.createdAt);
        } else {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
    });

    return (
        <div className='container'>
            <h1>Note List</h1>
            <button onClick={toggleOrder}>
                {ascendingOrder ? 'Sort Descending' : 'Sort Ascending'}
            </button>
            {sortedNotes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <ul>
                    {sortedNotes.map((note) => (
                        <li key={note._id}>
                            {note.text && (
                                <>
                                    {note.text}
                                    <br />
                                    <br />
                                    Created at:{' '}
                                    {new Date(note.createdAt).toLocaleString()}
                                    <button
                                        onClick={() =>
                                            handleDeleteNote(note._id)
                                        }>
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
