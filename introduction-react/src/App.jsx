import "./index.css";
import { Header } from "./component/containers/header/Header";
import { Footer } from "./component/containers/footer/Footer";
import { Routine } from "./component/containers/routine/Routine";
import Compteur from "./component/containers/compteur/compteur";
import { Menu } from "./component/containers/menu/Menu";
import { ContactForm } from "./component/containers/contact/Contact";
import { createContext } from "react";
import { User } from "./component/containers/users/User";
import { useEffect } from "react";
import { useState } from "react";
import  Got  from "./component/containers/got/GOT";

export const UtilisateurContext = createContext();
function App() {
  const user = {
    firstName: "Laigle",
    lastName: "Jérémy",
    hobbies: ["HTML", "CSS", "React", "Javascript"],
  };

  const [time, setTime] = useState(new Date());
  const [misAJour, setMisAJour] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // déclarer la function des bouton là ou on utilise le bouton sunon il faut en créer un component
  /* function ajoute() {
    alert("Ajoute")
  }

  function supprime() {
    alert("Supprime")
  }*/
  return (
    <UtilisateurContext.Provider value={user}>
      <div className="flex flex-col items-center justify-center gap-4 p-11">
        <Got />
        <p className="text-3xl p-8">{time.toLocaleTimeString()}</p>
        <button onClick={() => setMisAJour(!misAJour)}>Mis à jour</button>
        <Header />
        <Menu>
          <Compteur />
        </Menu>
        <ContactForm />
        <User />
        <Routine />
        <Footer />
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;
