import "./SearchBar.css";
import PropTypes from "prop-types";
import { LocaleContext } from "../../contexts/LocaleContext";
import { useContext } from "react";

const SearchBar = ({ keyword, change }) => {
    const [locale] = useContext(LocaleContext);
    return (
        <section>
            <input
                className="search"
                value={keyword}
                onChange={change}
                placeholder={locale === "id" ? "Cari..." : "Search..."}
                type="text"
            />
        </section>
    );
};
SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
};

export default SearchBar;
