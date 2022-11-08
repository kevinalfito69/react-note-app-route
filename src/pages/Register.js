import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputRegister from "../components/InputRegister/InputRegister";

import { register } from "../utils/api";

const Register = () => {
    const navigate = useNavigate();
    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
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
        }
    }

    return (
        <section>
            <InputRegister register={onRegisterHandler} />
        </section>
    );
};

export default Register;
