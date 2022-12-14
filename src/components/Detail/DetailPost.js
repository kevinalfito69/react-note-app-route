import "./DetailPost.css";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useState } from "react";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { BsThreeDots } from "react-icons/bs";
import { RotatingLines } from "react-loader-spinner";
import { deleteNotes, archiveNotes, unarchiveNote } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import HTMLReactParser from "html-react-parser";
const DetailPost = ({ id, title, body, archive, loading }) => {
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
            color: "var(--on-background)",
            background: "var(--surface)",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "var(--on-background)",
                    iconColor: "#8758ff",
                    background: "var(--surface)",
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
            color: "var(--on-background)",
            iconColor: "#8758ff",
            background: "var(--surface)",
            title: "Berhasil dipindahkan",
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                navigate("/");
            }
        });
    };
    if (loading) {
        return (
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
            />
        );
    }
    return (
        <article className="DetailPost__article">
            <h1>{title}</h1>
            <p> {HTMLReactParser(`${body}`)}</p>
            <div className="DetailPost__btn">
                <Link to="#" className="DetailPost__btn__toggler">
                    <BsThreeDots
                        className={`dots ${isActive ? "" : "rotate"}`}
                        onClick={handleToggle}
                    />
                </Link>

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
    loading: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archive: PropTypes.bool,
};

export default DetailPost;
