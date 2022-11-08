import useInput from "../../contexts/useInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./InputLogin.css";
const InputLogin = ({ login }) => {
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        login({
            email: email,
            password: password,
        });
    };
    return (
        <form className="login" onSubmit={onSubmitHandler}>
            <h1>Login</h1>
            <div className="login__input">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    id="email"
                    onChange={onEmailChange}
                />
            </div>
            <div className="login__input">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    id="password"
                    onChange={onPasswordChange}
                />
            </div>
            <button type="submit">Login</button>
            <p>
                Belum punya akun? <Link to="/register">Daftar di sini.</Link>
            </p>
        </form>
    );
};
InputLogin.propTypes = {
    login: PropTypes.func.isRequired,
};

export default InputLogin;
