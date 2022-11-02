import { useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import Navbar from "../components/Navbar/Navbar";
import DetailPost from "../components/Detail/DetailPost";
const Detail = () => {
    const { id } = useParams();
    const [note] = useState(getNote(id));

    return (
        <>
            <Navbar title="<- Back" />
            <DetailPost
                id={note.id}
                title={note.title}
                body={note.body}
                archive={note.archived}
            />
        </>
    );
};

export default Detail;
