import "./DeleteButton.css";
import { HiTrash } from "react-icons/hi";
import PropTypes from "prop-types";
const DeleteButton = ({ id, deleteHandler }) => {
    return (
        <a
            className="deleteBtn"
            href="#"
            title="Delete"
            onClick={() => deleteHandler(id)}
        >
            <HiTrash />
        </a>
    );
};
DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
};

export default DeleteButton;
