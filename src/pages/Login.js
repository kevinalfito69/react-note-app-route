import InputLogin from "../components/InputLogin/InputLogin";
import { login } from "../utils/api";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ loginSuccess }) => {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        if (!error) {
            loginSuccess(data);
        }
    }
    return (
        <section className="login-page">
            <h2>Silakan masuk untuk melanjutkan ...</h2>
            <InputLogin login={onLogin} />
            <p>
                Belum punya akun? <Link to="/register">Daftar di sini.</Link>
            </p>
        </section>
    );
};
Login.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default Login;
