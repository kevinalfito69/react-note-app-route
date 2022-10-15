import AddButton from "../components/AddButton/AddButton";
import Navbar from "../components/Navbar/Navbar";
import NavMobile from "../components/NavMobile/NavMobile";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList/NoteList";
import { useSearchParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton/DeleteButton";
import ArchiveButton from "../components/ArchiveButton/ArchiveButton";

const Index = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [notes, setnotes] = useState(getActiveNotes());
    const [keyword, setKeyword] = useState("");
    const keywordChangeHandler = (keyword) => {
        const key = keyword.target.value;
        setKeyword(key);
        const dataKeyword = searchParam.get("keyword");
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
            <Navbar title="Catatan" />
            <main>
                <SearchBar
                    keyword={keyword}
                    change={(key) => keywordChangeHandler(key)}
                />

                <NoteList
                    title="Note List"
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
