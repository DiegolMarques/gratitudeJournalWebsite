import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2 class = 'createNote'>Update note</h2>
      <form onSubmit={store.updateNote}>
        <input
          class = 'noteTitle'
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
          name="title"
        />
        <textarea
          class = 'noteTitle'
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
          name="body"
        />
        <button class = 'noteSubmit' type="submit">Update</button>
      </form>
    </div>
  );
}