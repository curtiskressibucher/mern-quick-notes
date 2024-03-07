export default function Notes({ notes }) {
    return (
        <div>
            <h1>Note List</h1>
            {notes.length === 0 ? (
                <p>No Notes Yet!</p>
            ) : (
                <ul>
                    {notes.map((note, i) => (
                        <li key={i}>
                            {note.text && (
                                <>
                                    {note.text}
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
