import InputNote from "../components/InputNote/InputNote";
import Navbar from "../components/Navbar/Navbar";
import NavMobile from "../components/NavMobile/NavMobile";
import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
const Add = () => {
    const [locale] = useContext(LocaleContext);
    return (
        <>
            <Navbar title={`<- ${locale === "id" ? "Kembali" : "Back"}`} />
            <InputNote />
            <NavMobile />
        </>
    );
};

export default Add;
