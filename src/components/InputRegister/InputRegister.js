import PropTypes from "prop-types";
import useInput from "../../contexts/useInput";
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
        <div>
            <form onSubmit={onSubmit} className="inputRegister">
                <label htmlFor="name">Name</label>
                <input
                    required
                    type="text"
                    id="name"
                    value={name}
                    onChange={onNameChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    required
                    type="email"
                    id="email"
                    value={email}
                    onChange={onEmailChange}
                />
                <label htmlFor="password"> Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password"
                    id="password2"
                    value={password2}
                    onChange={onPasswordChange2}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

InputRegister.propTypes = {
    register: PropTypes.func.isRequired,
};

export default InputRegister;
