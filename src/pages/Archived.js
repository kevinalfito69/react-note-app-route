import NoteList from "../components/NoteList/NoteList";
import { getArchivedNotes } from "../utils/local-data";
const Archived = () => {
    return <NoteList title="Archive Notes" notes={getArchivedNotes()} />;
};

export default Archived;
