import React from 'react';
import { NotesStore } from './NotesStore';

type NewInputPorps = {
    addNote: NotesStore["addNote"]
};

export const NewNoteInput: React.FC<NewInputPorps> = ({addNote}) => {
    const [note, setNote] = React.useState("");

    const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    };

    return (
        <div>
            <input value={note} type="text" name="note" placeholder="Note" onChange={updateNote} />
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}