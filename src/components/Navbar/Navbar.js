import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiNote, BiArchive, BiMoon, BiSun } from "react-icons/bi";
import PropType from "prop-types";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";
import { LocaleContext } from "../../contexts/LocaleContext";
const Navbar = ({ title }) => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const [locale, toggleLocale] = useContext(LocaleContext);
    console.log(theme);
    return (
        <header>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            <ul className="darkmode__mobile">
                <li>
                    <Link onClick={toggleTheme}>
                        {theme === "light" ? <BiMoon /> : <BiSun />}
                    </Link>
                </li>
                <li>
                    <Link onClick={toggleLocale}>
                        {locale === "id" ? "en" : "id"}
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
                </ul>
            </nav>
        </header>
    );
};
Navbar.propTypes = {
    title: PropType.string.isRequired,
};
export default Navbar;
