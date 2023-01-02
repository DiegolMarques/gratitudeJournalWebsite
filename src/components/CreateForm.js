import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2 class='createNote'>Create Journal Entry:</h2>
      <form onSubmit={store.createNote}>
        <input 
        class = 'noteTitle'
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
          placeholder='Title'
        />
        <textarea
          class = 'noteJournal'
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
          placeholder='Journal Entry'
        />
        <button class = 'noteSubmit' type="submit">Create</button>
      </form>
    </div>
  );
}