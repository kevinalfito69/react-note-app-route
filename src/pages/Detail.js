import { useEffect, useState, useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import { useParams } from "react-router-dom";
import { getDetailNotes } from "../utils/api";
import Navbar from "../components/Navbar/Navbar";
import DetailPost from "../components/Detail/DetailPost";

const Detail = () => {
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(true);
    const [locale] = useContext(LocaleContext);

    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const { error, data } = await getDetailNotes(id);
            if (!error) {
                setNote(data);
                setLoading(false);
            }
        };
        getData();
        return setNote("");
    }, [id]);

    return (
        <>
            <Navbar title={`<- ${locale === "id" ? "Kembali" : "Back"}`} />
            <DetailPost
                loading={loading}
                id={note.id}
                title={note.title}
                body={note.body}
                archive={note.archived}
            />
        </>
    );
};

export default Detail;
