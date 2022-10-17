import "./NoteItem.css";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import PropTypes from "prop-types";
import parser from "html-react-parser";

const NoteItem = ({ id, title, createdAt, body }) => {
    return (
        <article className="NoteItem" data-id={id}>
            <h3>
                <Link to={`/detail/${id}`}>{title}</Link>
            </h3>
            <p className="NoteItem__desc">{parser(body)}</p>
            <p className="NoteItem__tanggal">{showFormattedDate(createdAt)}</p>
        </article>
    );
};
NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
