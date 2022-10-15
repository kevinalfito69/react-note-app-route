import InputNote from "../components/InputNote/InputNote";
import Navbar from "../components/Navbar/Navbar";
import NavMobile from "../components/NavMobile/NavMobile";

const Add = () => {
    return (
        <>
            <Navbar icon="<--" title="Back" />
            <InputNote />
            <NavMobile />
        </>
    );
};

export default Add;
