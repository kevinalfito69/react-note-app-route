import "./ArchiveButton.css";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";
const ArchiveButton = ({ archive, id, archivedHandler }) => {
    return (
        <>
            {archive ? (
                <a
                    href="#"
                    className="archive up"
                    title="Unarchive"
                    onClick={() => archivedHandler(id, archive)}
                >
                    <BiArchiveOut />
                </a>
            ) : (
                <a
                    href="#"
                    className="archive in"
                    title="Archive"
                    onClick={() => archivedHandler(id, archive)}
                >
                    <BiArchiveIn />
                </a>
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
