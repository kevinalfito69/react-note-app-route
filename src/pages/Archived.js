import NoteList from "../components/NoteList/NoteList";
import { getArchiveNotes } from "../utils/api";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import { useContext, useState } from "react";
import NavMobile from "../components/NavMobile/NavMobile";

const Archived = () => {
    const [locale] = useContext(LocaleContext);
    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await getArchiveNotes();
            setNote(data);
            setLoading(false);
        };
        getData();
    }, [note]);

    return (
        <>
            <Navbar
                title={locale === "id" ? "Arsip" : "Archive"}
                showLogout={true}
            />
            <NoteList
                title={locale === "id" ? "Daftar arsip" : "Archive list"}
                notes={note}
                loading={loading}
            />
            <NavMobile />
        </>
    );
};

export default Archived;
