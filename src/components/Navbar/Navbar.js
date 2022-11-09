import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiNote, BiArchive, BiMoon, BiSun, BiLogOut } from "react-icons/bi";
import PropType from "prop-types";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";
import { LocaleContext } from "../../contexts/LocaleContext";
import { AuthContext } from "../../contexts/AuthContext";
const Navbar = ({ title, logout, showLogout = false }) => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const [locale, toggleLocale] = useContext(LocaleContext);
    const [authUser] = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            <ul className="nav__mobile">
                <li>
                    <Link title="Theme" onClick={toggleTheme}>
                        {theme === "light" ? <BiMoon /> : <BiSun />}
                    </Link>
                </li>
                <li>
                    <Link title="Translate" onClick={toggleLocale}>
                        {locale === "id" ? "en" : "id"}
                    </Link>
                </li>

                <li style={showLogout ? null : { display: "none" }}>
                    <Link title="Logout" onClick={logout}>
                        <BiLogOut />
                    </Link>
                </li>
            </ul>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">
                            <BiNote />
                            Catatan
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive">
                            <BiArchive />
                            Arsip
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleTheme}>
                            {theme === "light"
                                ? [<BiMoon />, "Dark Mode"]
                                : [<BiSun />, "Light Mode"]}
                        </Link>
                    </li>
                    <li style={showLogout ? null : { display: "none" }}>
                        <Link onClick={logout}>
                            <BiLogOut />
                            Logout, {authUser.name}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
Navbar.propTypes = {
    title: PropType.string.isRequired,
    logout: PropType.func,
    showLogout: PropType.bool.isRequired,
};
export default Navbar;
