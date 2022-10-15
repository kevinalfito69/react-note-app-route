import "./SearchBar.css";
import PropTypes from "prop-types";
const SearchBar = ({ keyword, change }) => {
    return (
        <section>
            <input
                className="search"
                value={keyword}
                onChange={change}
                placeholder="Search"
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
