import "./InputNote.css";

import { useState } from "react";
import { notes, addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";

const InputNote = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const onBodyChangeHandler = (e) => {
        setBody(e.target.value);
    };
    console.log(title, body);

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: body,
        };
        navigate("/");
        return addNote(data);
    };

    return (
        <section className="input__catatan">
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    name="title"
                    value={title}
                    type="text"
                    placeholder="Tambahkan catatan"
                    onChange={onTitleChangeHandler}
                    required
                />
                <textarea
                    name="body"
                    value={body}
                    placeholder="Catat sesuatu"
                    cols="30"
                    rows="10"
                    onChange={onBodyChangeHandler}
                    required
                ></textarea>
                <input type="submit" className="submit" value="Simpan" />
            </form>
        </section>
    );
};

export default InputNote;
