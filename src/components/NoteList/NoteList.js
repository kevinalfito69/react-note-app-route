import "./NoteList.css";

import NoteItem from "../NoteItem/NoteItem";

import AddButton from "../AddButton/AddButton";
import PropTypes from "prop-types";

const NoteList = ({ title, notes }) => {
    return (
        <>
            <section className="notelist">
                <h2>{title}</h2>
                {notes.length === 0 ? (
                    <p>Catatan kosong</p>
                ) : (
                    notes?.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
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
