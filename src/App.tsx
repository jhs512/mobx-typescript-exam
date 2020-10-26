import React from 'react';
import './App.css';
import {useObserver} from 'mobx-react-lite';
import { NewNoteInput } from './NewNoteInput';
import { NotesStore } from './NotesStore';
import { useRootStore } from './RootStateContext';

function App() {
  const { notesStore } = useRootStore();

  return useObserver(() => (
    <>
      <NewNoteInput addNote={notesStore.addNote} />
    </>
  ));
}

export default App;
