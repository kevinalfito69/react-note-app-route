import AddButton from "../components/AddButton/AddButton";
import Navbar from "../components/Navbar/Navbar";
import NavMobile from "../components/NavMobile/NavMobile";
import SearchBar from "../components/SearchBar/SearchBar";
import { useContext, useState } from "react";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList/NoteList";
import { useSearchParams } from "react-router-dom";
import { LocaleContext } from "../contexts/LocaleContext";
const Index = () => {
    const [locale] = useContext(LocaleContext);
    const [searchParam, setSearchParam] = useSearchParams();
    const [notes, setnotes] = useState(getActiveNotes());
    const [keyword, setKeyword] = useState("");
    const keywordChangeHandler = (keyword) => {
        const key = keyword.target.value;
        setKeyword(key);

        setSearchParam({ title: key });
    };
    // const searchParamHandler = (keyword) => {
    //     setSearchParam(keyword);
    // };
    // filter note
    const dataNote = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
    return (
        <>
            <Navbar title={locale === "id" ? "Catatan" : "Note"} />
            <main>
                <SearchBar
                    keyword={keyword}
                    change={(key) => keywordChangeHandler(key)}
                />

                <NoteList
                    title={locale === "id" ? "Daftar catatan" : "Note list"}
                    label="Active Notes"
                    notes={dataNote}
                />
            </main>
            <AddButton />
            <NavMobile />
        </>
    );
};

export default Index;
