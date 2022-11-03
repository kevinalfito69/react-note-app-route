import "./NavMobile.css";
import { Link } from "react-router-dom";
import { HiDocumentText, HiArchive } from "react-icons/hi";
import { useContext } from "react";
import { LocaleContext } from "../../contexts/LocaleContext";
const NavMobile = () => {
    const [locale] = useContext(LocaleContext);
    return (
        <footer>
            <ul className="nav__mobile__link">
                <li>
                    <Link to="/">
                        <span>
                            <HiDocumentText />
                        </span>
                        {locale === "id" ? "Catatan" : "Note"}
                    </Link>
                </li>
                <li>
                    <Link to="/archive">
                        <span>
                            <HiArchive />
                        </span>
                        {locale === "id" ? "Arsip" : "Archive"}
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default NavMobile;
