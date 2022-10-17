import "./InputNote.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { addNote } from "../../utils/local-data";
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
    const submitHandler = (e) => {
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
            color: "white",
            iconColor: "#8758ff",
            background: "#2a2a2a",
            title: "Catatan berhasil dibuat",
        }).then(navigate("/"));

        return addNote(data);
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
                <div className="wrapper">
                    <p
                        className="input textArea"
                        contentEditable
                        name="body"
                        data-placeholder="Catat sesuatu..."
                        onInput={onBodyChangeHandler}
                        required
                    ></p>
                </div>
                <input type="submit" className="submit" value="Simpan" />
            </form>
        </section>
    );
};

export default InputNote;
