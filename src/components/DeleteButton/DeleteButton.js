import "./DeleteButton.css";
import { HiTrash } from "react-icons/hi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DeleteButton = ({ id, deleteHandler }) => {
    return (
        <Link
            className="deleteBtn"
            href="#"
            title="Delete"
            onClick={() => deleteHandler(id)}
        >
            <HiTrash />
        </Link>
    );
};
DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
};

export default DeleteButton;
