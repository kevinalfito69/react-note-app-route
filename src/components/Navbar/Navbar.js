import "./Navbar.css";
import { Link } from "react-router-dom";
import PropType from "prop-types";
const Navbar = ({ icon, title }) => {
    return (
        <header>
            <h1>
                <Link to="/">
                    {icon} {title}
                </Link>
            </h1>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Catatan</Link>
                    </li>
                    <li>
                        <Link to="/archive">Arsip</Link>
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
