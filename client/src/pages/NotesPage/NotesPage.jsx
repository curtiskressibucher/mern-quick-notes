import { useState, useEffect } from 'react';
import { getToken } from '../../utilities/users-service';
import NotesForm from '../../components/NotesForm/NotesForm';
import NotesList from '../../components/NotesList/NotesList';

export default function NotesPage({ user, setUser }) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const token = getToken();
            const response = await fetch('/api/notes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();

                // console.log('Fetched notes:', data.notes);
                setNotes(data.notes);
            }
        };

        fetchNotes();
    }, []);

    const addNote = async (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <>
            <h1>Notes Page</h1>
            <h1>My Notes App</h1>
            <NotesForm user={user} addNote={addNote} />
            <NotesList notes={notes} />
        </>
    );
}
