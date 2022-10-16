import "./DetailPost.css";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { BsThreeDots } from "react-icons/bs";
import { deleteNote, archiveNote, unarchiveNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";

const DetailPost = ({ id, title, body, archive }) => {
    const menu = useRef();
    const dots = useRef();
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    const navigate = useNavigate();
    //  delete handler
    const deleteHandler = (id) => {
        deleteNote(id);
        navigate("/");
    };
    //  archive handler
    const archiveHandler = (id, archive) => {
        archive ? unarchiveNote(id) : archiveNote(id);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            color: "white",
            iconColor: "#8758ff",
            background: "#2a2a2a",
            title: "Berhasil dipindahkan",
        });
        navigate("/");
    };
    return (
        <article className="DetailPost__article">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="DetailPost__btn">
                <a href="#" className="DetailPost__btn__toggler">
                    <BsThreeDots
                        className={`dots ${isActive ? "" : "rotate"}`}
                        ref={dots}
                        onClick={handleToggle}
                    />
                </a>

                <div
                    className={`DetailPost__btn__menu  ${
                        isActive ? "" : "show"
                    }`}
                    ref={menu}
                >
                    <ArchiveButton
                        archive={archive}
                        id={id}
                        archivedHandler={archiveHandler}
                    />
                    <DeleteButton id={id} deleteHandler={deleteHandler} />
                </div>
            </div>
        </article>
    );
};
DetailPost.propsTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archive: PropTypes.bool,
};

export default DetailPost;
