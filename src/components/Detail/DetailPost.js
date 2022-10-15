import "./DetailPost.css";
import PropTypes from "prop-types";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
const DetailPost = ({ id, title, body, archive }) => {
    const menu = document.querySelector(".DetailPost__btn__menu");
    const dots = document.querySelector(".dots");
    const togglerHandler = (e) => {
        dots.classList.toggle("rotate");
        menu.classList.toggle("show");
    };
    return (
        <article className="DetailPost__article">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="DetailPost__btn">
                <a
                    href="#"
                    className="DetailPost__btn__toggler"
                    onClick={togglerHandler}
                >
                    <BsThreeDots className="dots" />
                </a>

                <div className="DetailPost__btn__menu">
                    <ArchiveButton archived={archive} />
                    <DeleteButton id={id} />
                </div>
            </div>
        </article>
    );
};
DetailPost.propsTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default DetailPost;
