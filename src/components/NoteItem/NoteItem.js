import "./NoteItem.css";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
const NoteItem = ({ id, title, createdAt, body, archived, action }) => {
    return (
        <article className="NoteItem" data-id={id}>
            <h3>
                <Link to={`/detail/${id}`}>{title}</Link>
            </h3>
            <p className="NoteItem__desc">{body}</p>
            <p className="NoteItem__tanggal">{showFormattedDate(createdAt)}</p>
        </article>
    );
};

export default NoteItem;
