import "./AddButton.css";
import { Link } from "react-router-dom";
const AddButton = () => {
    return (
        <button className="add__button">
            <Link to="/add">+</Link>
        </button>
    );
};

export default AddButton;
