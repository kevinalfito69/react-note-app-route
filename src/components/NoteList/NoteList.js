import "./NoteList.css";

import NoteItem from "../NoteItem/NoteItem";

import AddButton from "../AddButton/AddButton";
import PropTypes from "prop-types";
import { LocaleContext } from "../../contexts/LocaleContext";
import { useContext } from "react";
const NoteList = ({ title, notes }) => {
    const [locale] = useContext(LocaleContext);
    return (
        <>
            <h2 className="NoteList__title">{title}</h2>
            <section className="NoteList__section">
                {notes.length === 0 ? (
                    <p>
                        {locale === "id"
                            ? "Catatan kosong.."
                            : "Empty note list.."}
                    </p>
                ) : (
                    notes?.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                        />
                    ))
                )}
            </section>
            <AddButton />
        </>
    );
};
NoteList.propTypes = {
    title: PropTypes.string.isRequired,
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
