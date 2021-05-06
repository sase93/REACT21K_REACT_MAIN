import React from 'react';

const NotesList = ({notes}) => {
    return (
        <div>
            <h3>My notes:</h3>
            <ul>
                {notes.map(note => {return <li key={note.id}>{note.message}</li>})}
            </ul>
        </div>
    );
};

export default NotesList;