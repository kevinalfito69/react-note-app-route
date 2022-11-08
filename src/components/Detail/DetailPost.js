import "./DetailPost.css";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useState } from "react";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { BsThreeDots } from "react-icons/bs";

import { deleteNotes, archiveNotes, unarchiveNote } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import React from "react";
import HTMLReactParser from "html-react-parser";
const DetailPost = ({ id, title, body, archive }) => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    const navigate = useNavigate();
    //  delete handler
    const deleteHandler = (id) => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Kamu tidak dapat mengembalikan catatan ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            iconColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            color: " --on-background",
            background: " --background",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: " --on-background",
                    iconColor: "#8758ff",
                    background: " --background",
                    title: "Berhasil dihapus",
                });
                deleteNotes(id);
                console.log(id);
                navigate("/");
            }
        });
    };
    //  archive handler
    const archiveHandler = (id, archive) => {
        archive ? unarchiveNote(id) : archiveNotes(id);
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
            color: " --on-background",
            iconColor: "#8758ff",
            background: "--background",
            title: "Berhasil dipindahkan",
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                navigate("/");
            }
        });
    };
    return (
        <article className="DetailPost__article">
            <h1>{title}</h1>
            <p> {HTMLReactParser(`${body}`)}</p>
            <div className="DetailPost__btn">
                <a href="#" className="DetailPost__btn__toggler">
                    <BsThreeDots
                        className={`dots ${isActive ? "" : "rotate"}`}
                        onClick={handleToggle}
                    />
                </a>

                <div
                    className={`DetailPost__btn__menu  ${
                        isActive ? "" : "show"
                    }`}
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
