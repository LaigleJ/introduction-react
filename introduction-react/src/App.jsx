import "./index.css";
import { Header } from "./component/containers/header/Header";
import { Footer } from "./component/containers/footer/Footer";
import { User } from "./component/containers/users/user";
import { Routine } from "./component/containers/routine/Routine";
import Compteur from "./component/containers/compteur/compteur";
import { Menu } from "./component/containers/menu/Menu";
import { ContactForm } from "./component/containers/contact/Contact";

function App() {
  const user = {
    firstName: "Laigle",
    lastName: "Jérémy",
    hobbies: ["HTML", "CSS", "React", "Javascript"],
  };
  // déclarer la function des bouton là ou on utilise le bouton sunon il faut en créer un component
  /* function ajoute() {
    alert("Ajoute")
  }

  function supprime() {
    alert("Supprime")
  }*/
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-11">
        <Header />
        <Menu>
          <Compteur />
        </Menu>
        <ContactForm />
        <User utilisateur={user} />
        <Routine />
        <Footer />
      </div>
    </>
  );
}

export default App;
