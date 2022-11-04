import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/InputRegister/InputRegister";

import { register } from "../utils/api";

const Register = () => {
    const navigate = useNavigate();
    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate("/");
        }
    }

    return (
        <section>
            <h2>Gak perlu serius-serius ya isinya ...</h2>
            <InputRegister register={onRegisterHandler} />
            <p>
                Kembali ke <Link to="/">Masuk</Link>
            </p>
        </section>
    );
};

export default Register;
