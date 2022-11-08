import PropTypes from "prop-types";
import useInput from "../../contexts/useInput";
import { Link } from "react-router-dom";
import "./InputRegister.css";
const InputRegister = ({ register }) => {
    const [name, onNameChange] = useInput();
    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();
    const [password2, onPasswordChange2] = useInput();
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("Password tidak sama");
        }
        register({
            name: name,
            email: email,
            password: password,
        });
    };
    return (
        <form onSubmit={onSubmit} className="register">
            <h1>Register</h1>
            <div className="register__input">
                <label htmlFor="name">Name</label>
                <input
                    required
                    type="text"
                    id="name"
                    value={name}
                    onChange={onNameChange}
                />
            </div>
            <div className="register__input">
                <label htmlFor="email">Email</label>
                <input
                    required
                    type="email"
                    id="email"
                    value={email}
                    onChange={onEmailChange}
                />
            </div>
            <div className="register__input">
                <label htmlFor="password"> Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={onPasswordChange}
                />
            </div>
            <div className="register__input">
                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password"
                    id="password2"
                    value={password2}
                    onChange={onPasswordChange2}
                />
            </div>
            <button type="submit">Register</button>
            <p>
                Kembali ke <Link to="/">Masuk</Link>
            </p>
        </form>
    );
};

InputRegister.propTypes = {
    register: PropTypes.func.isRequired,
};

export default InputRegister;
