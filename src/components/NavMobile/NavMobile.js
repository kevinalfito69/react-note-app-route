import "./NavMobile.css";
import { Link } from "react-router-dom";
import { HiDocumentText, HiArchive } from "react-icons/hi";
const NavMobile = () => {
    return (
        <footer>
            <ul className="nav__mobile__link">
                <li>
                    <Link to="/">
                        <span>
                            <HiDocumentText />
                        </span>
                        Catatan
                    </Link>
                </li>
                <li>
                    <Link to="/archive">
                        <span>
                            <HiArchive />
                        </span>
                        Arsip
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default NavMobile;
