import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./index.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const [shineTrigger, setShineTrigger] = useState({ id: null, key: 0 });

  const triggerShine = (id) => {
    setShineTrigger((prev) => ({ id, key: prev.key + 1 }));
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} triggerShine={triggerShine} />
      <Main lang={lang} shineTrigger={shineTrigger} />
      <Footer />
    </>
  );
}
