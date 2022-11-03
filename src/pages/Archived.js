import NoteList from "../components/NoteList/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import Navbar from "../components/Navbar/Navbar";
import { LocaleContext } from "../contexts/LocaleContext";
import { useContext } from "react";
import NavMobile from "../components/NavMobile/NavMobile";

const Archived = () => {
    const [locale] = useContext(LocaleContext);
    return (
        <>
            <Navbar title={locale === "id" ? "Arsip" : "Archive"} />
            <NoteList
                title={locale === "id" ? "Daftar arsip" : "Archive list"}
                notes={getArchivedNotes()}
            />
            <NavMobile />
        </>
    );
};

export default Archived;
