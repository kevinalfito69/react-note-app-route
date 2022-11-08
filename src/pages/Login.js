import InputLogin from "../components/InputLogin/InputLogin";
import { login } from "../utils/api";
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
            <InputLogin login={onLogin} />
        </section>
    );
};
Login.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default Login;
