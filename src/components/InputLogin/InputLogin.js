import useInput from "../../contexts/useInput";
const InputLogin = () => {
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");
    return (
        <div>
            <label for="email">Email</label>
            <input
                type="email"
                value={email}
                id="email"
                onChange={onEmailChange}
            />
            <label for="password">Password</label>
            <input
                type="password"
                value={password}
                id="password"
                onChange={onPasswordChange}
            />
        </div>
    );
};

export default InputLogin;
