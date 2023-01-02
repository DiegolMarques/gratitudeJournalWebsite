import notesStore from "../stores/notesStore";
import { useEffect } from "react";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm"
import CreateForm from "../components/CreateForm";

export default function NotesPage() {
    const store = notesStore();

    // Use effect
    useEffect(() => {
        store.fetchNotes();
      }, []);

    return (
        <div>      
            <UpdateForm />
            <CreateForm />
            <Notes />
        </div>
    );
}