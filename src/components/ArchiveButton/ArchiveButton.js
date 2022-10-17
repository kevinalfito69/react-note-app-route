import "./ArchiveButton.css";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ArchiveButton = ({ archive, id, archivedHandler }) => {
    return (
        <>
            {archive ? (
                <Link
                    className="archive up"
                    title="Unarchive"
                    onClick={() => archivedHandler(id, archive)}
                >
                    <BiArchiveOut />
                </Link>
            ) : (
                <Link
                    className="archive in"
                    title="Archive"
                    onClick={() => archivedHandler(id, archive)}
                >
                    <BiArchiveIn />
                </Link>
            )}
        </>
    );
};
ArchiveButton.propTypes = {
    archive: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    archivedHandler: PropTypes.func.isRequired,
};

export default ArchiveButton;
