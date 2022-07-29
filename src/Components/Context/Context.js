import "./styles.css";
import { createContext, useContext, useState } from "react";

const languages = ["Java", "Python"];
const LanguageContext = createContext();

export default function ContextApp() {
  const [language, setLanguage] = useState(languages[0]);
  const toggleLanguage = () => {
    setLanguage((language) =>
      language === languages[0] ? languages[1] : languages[0]
    );
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Main />
    </LanguageContext.Provider>
  );
}

function Main() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Toggle Language</p>
      <button type="button" onClick={toggleLanguage}>
        Toggle
      </button>
      <h2>{language}</h2>
    </div>
  );
}
