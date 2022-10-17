import NoteList from "../components/NoteList/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import Navbar from "../components/Navbar/Navbar";
const Archived = () => {
    return (
        <>
            <Navbar title="Arsip" />
            <NoteList title="Archive List" notes={getArchivedNotes()} />
        </>
    );
};

export default Archived;
