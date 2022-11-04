import useInput from "../../contexts/useInput";
import PropTypes from "prop-types";
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
            <label htmlFor="email">Email</label>
            <input
                type="email"
                value={email}
                id="email"
                onChange={onEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                value={password}
                id="password"
                onChange={onPasswordChange}
            />
            <button type="submit">Login</button>
        </form>
    );
};
InputLogin.propTypes = {
    login: PropTypes.func.isRequired,
};

export default InputLogin;
