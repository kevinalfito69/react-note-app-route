import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiNote, BiArchive, BiMoon, BiSun } from "react-icons/bi";
import PropType from "prop-types";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";
const Navbar = ({ title }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <header>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            <Link className="darkmode__mobile" onClick={toggleTheme}>
                {theme === "light" ? <BiMoon /> : <BiSun />}
            </Link>
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
