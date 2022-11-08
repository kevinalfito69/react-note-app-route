import NoteList from "../components/NoteList/NoteList";
import { getArchiveNotes } from "../utils/api";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import { useContext, useState } from "react";
import NavMobile from "../components/NavMobile/NavMobile";

const Archived = () => {
    const [locale] = useContext(LocaleContext);
    const [note, setNote] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await getArchiveNotes();
            setNote(data);
        };
        getData();
    }, [note]);

    return (
        <>
            <Navbar title={locale === "id" ? "Arsip" : "Archive"} />
            <NoteList
                title={locale === "id" ? "Daftar arsip" : "Archive list"}
                notes={note}
            />
            <NavMobile />
        </>
    );
};

export default Archived;
