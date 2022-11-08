import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailNotes } from "../utils/api";
import Navbar from "../components/Navbar/Navbar";
import DetailPost from "../components/Detail/DetailPost";
const Detail = () => {
    const { id } = useParams();

    const [note, setNote] = useState("");

    useEffect(() => {
        const getData = async () => {
            const { error, data } = await getDetailNotes(id);
            setNote(data);
        };
        getData();
        return setNote("");
    }, []);

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
