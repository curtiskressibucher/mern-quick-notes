import { useState } from 'react';
import './NotesList.css';

export default function Notes({ notes }) {
    const [ascendingOrder, setAscendingOrder] = useState(true);

    const toggleOrder = () => {
        setAscendingOrder(!ascendingOrder);
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
                    {sortedNotes.map((note, i) => (
                        <li key={i}>
                            {note.text && (
                                <>
                                    {note.text}
                                    <br />
                                    <br />
                                    Created at:{' '}
                                    {new Date(note.createdAt).toLocaleString()}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
