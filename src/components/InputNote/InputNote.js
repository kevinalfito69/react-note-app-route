import "./InputNote.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { addNote } from "../../utils/local-data";
import { createNotes } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const InputNote = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const onBodyChangeHandler = (e) => {
        setBody(e.target.innerHTML);
    };

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: body,
        };
        Swal.fire({
            toast: true,
            position: "top-start",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: "var(--on-background)",
            iconColor: "#8758ff",
            background: "var(--surface)",
            title: "Catatan berhasil dibuat",
        }).then(navigate("/"));

        return await createNotes(data);
    };

    return (
        <section className="input__catatan">
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    className="input "
                    name="title"
                    value={title}
                    type="text"
                    placeholder="Tambahkan judul catatan"
                    onChange={onTitleChangeHandler}
                    required
                />
                <div
                    className="wrapper"
                    contentEditable
                    name="body"
                    data-placeholder="Catat sesuatu..."
                    onInput={onBodyChangeHandler}
                    required
                ></div>
                <input type="submit" className="submit" value="Simpan" />
            </form>
        </section>
    );
};

export default InputNote;
