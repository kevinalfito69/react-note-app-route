import AddButton from "../components/AddButton/AddButton";
import Navbar from "../components/Navbar/Navbar";
import NavMobile from "../components/NavMobile/NavMobile";
import SearchBar from "../components/SearchBar/SearchBar";
import { useContext, useEffect, useState } from "react";
import NoteList from "../components/NoteList/NoteList";
import { useSearchParams } from "react-router-dom";
import PropType from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import { getNotes } from "../utils/api";
const Index = ({ onLogout }) => {
    const [locale] = useContext(LocaleContext);
    const [, setSearchParam] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState("");
    const keywordChangeHandler = (keyword) => {
        const key = keyword.target.value;
        setKeyword(key);

        setSearchParam({ title: key });
    };

    useEffect(() => {
        const getData = async () => {
            const { data } = await getNotes();
            setNotes(data);
            setLoading(false);
        };
        getData();
    }, [notes]);
    // filter note
    const dataNote = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <>
            <Navbar
                title={locale === "id" ? "Catatan" : "Note"}
                logout={onLogout}
                showLogout={true}
            />
            <main>
                <SearchBar
                    keyword={keyword}
                    change={(key) => keywordChangeHandler(key)}
                />

                <NoteList
                    title={locale === "id" ? "Daftar catatan" : "Note list"}
                    loading={loading}
                    label="Active Notes"
                    notes={dataNote}
                />
            </main>
            <AddButton />
            <NavMobile />
        </>
    );
};
Index.propType = {
    onLogout: PropType.func.isRequired,
};
export default Index;
