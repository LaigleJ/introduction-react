import Button from "../UI/button/Button";
import { useState } from "react";

export function ContactForm() {
    // Variable pour stocker les données du formulaire
    const [FullNameInput, setFullNameInput] = useState("");
    const [FullNameError, setFullNameError] = useState("");
  
    function gereFullName(event) {
      // Récupérer l'entrée de l'utilisateur
      const valeur = event.target.value;
      // Stocker la valeur de l'input dans la variable d'état
      setFullNameInput(valeur);
      // Remettre à zéro l'erreur si l'utilisateur saisit quelque chose
      setFullNameError("");
    }
  
    function submitForm() {
      if (FullNameInput === "") {
        setFullNameError("Veuillez renseigner votre nom et prénom");
        return;
      }
      alert("Contact : " + FullNameInput);
      setFullNameInput("");
    }
  
    return (
      <>
        <div className="p-4">
          <h2>Formulaire de contact</h2>
          <input
            className="bg-neutral-800 p-2 w-full text-white"
            type="text"
            value={FullNameInput} // Assurez-vous que l'input est contrôlé
            onChange={gereFullName}
            placeholder="Votre Nom et Prénom"
          />
          <p className="text-red-600">{FullNameError}</p>
          <Button gereclique={submitForm}>Envoyer le message</Button>
        </div>
      </>
    );
  } 