import "./ArchiveButton.css";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
const ArchiveButton = ({ archived, id, archivedHandler }) => {
    return (
        <>
            {archived ? (
                <a href="#" className="archive up" title="Unarchive">
                    <BiArchiveOut />
                </a>
            ) : (
                <a href="#" className="archive in" title="Archive">
                    <BiArchiveIn />
                </a>
            )}
        </>
    );
};

export default ArchiveButton;
