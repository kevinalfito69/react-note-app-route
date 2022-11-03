import { createContext, useState } from "react";

export const LocaleContext = createContext();

const LocaleContextProvider = ({ children }) => {
    const [locale, setLocale] = useState("id");
    const toggleLocale = () => {
        setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
    };
    return (
        <LocaleContext.Provider value={[locale, toggleLocale]}>
            {children}
        </LocaleContext.Provider>
    );
};
export default LocaleContextProvider;
