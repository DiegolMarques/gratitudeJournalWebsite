import notesStore from "../stores/notesStore";

export default function Note({ note }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div key={note._id}>
      <h3 class = 'noteTitles'>{note.title}</h3>
      <div class = 'journal'>
      <p1>{note.body}</p1>
      </div>
      <div class = 'buttonTogether'>
      <button class ='noteButton' onClick={() => store.deleteNote(note._id)}>Delete</button>
      <button class ='noteButton' onClick={() => store.toggleUpdate(note)}>Update</button>
      </div>
    </div>
  );
}