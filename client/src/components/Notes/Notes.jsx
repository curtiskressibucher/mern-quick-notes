import React, { useState, useEffect } from 'react';

export default function Notes() {
    const [notes, setNotes] = useState([]);

    return (
        <div>
            <h1>Notes</h1>
            {/* <ul>
                {notes.map((note) => (
                    <li key={note._id}>{note.text}</li>
                ))}
            </ul> */}
        </div>
    );
}
