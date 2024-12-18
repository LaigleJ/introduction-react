import PropTypes from "prop-types";
import { useState } from "react";

export function Hobbies() {
  const hobbiesDb = [
    {
      id: 0,
      name: "HTML",
    },
    {
      id: 1,
      name: "CSS",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "Javascript",
    },
  ];

  // Définir l'état local pour gérer les hobbies ajoutés
  const [pations, setPations] = useState([]); 
  const [newHobby, setNewHobby] = useState(""); // L'état pour le nouvel hobby à ajouter
  const [error, setError] = useState(""); // Pour gérer les erreurs
  const [nextId, setNextId] = useState(4); // ID commence à 4 pour les nouveaux hobbies

  const handleInputChange = (event) => {
    setNewHobby(event.target.value);

    // Si l'utilisateur commence à taper un hobby valide, on supprime l'erreur
    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleAddHobby = () => {
    if (newHobby.trim() === "") {
      setError("Le champ ne peut pas être vide."); // Afficher une erreur si le champ est vide
      return;
    }

    // Vérifie si le hobby existe déjà dans pations
    if (pations.some((hobby) => hobby.name === newHobby)) {
      setError("Ce hobby existe déjà.");
      return;
    }

    // Créer un nouvel hobby avec un ID unique
    const newHobbyObject = {
      id: nextId, // Attribuer un ID unique
      name: newHobby,
    };

    // Ajouter le hobby à la liste de pations
    setPations([...pations, newHobbyObject]);

    // Mettre à jour l'ID pour le prochain hobby
    setNextId(nextId + 1);

    // Réinitialiser l'input et l'erreur
    setNewHobby("");
    setError("");
  };

  return (
    <>
      <h2 className="title">Hobbies</h2>

      <ul>
        {/* Boucle uniquement sur pations, qui contient les hobbies ajoutés */}
        {pations.map((hobby) => (
          <li
            key={hobby.id}
            style={{
              padding: "10px",
              border: "1px solid white",
              margin: "0.5em",
            }}
          >
            {hobby.name}
          </li>
        ))}
      </ul>

      {/* Formulaire pour ajouter un hobby */}
      <div>
        <input
          type="text"
          value={newHobby}
          onChange={handleInputChange}
          placeholder="Ajoutez un hobby"
          style={{
            padding: "10px",
            marginTop: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleAddHobby}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Ajouter Hobby
        </button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </>
  );
}

Hobbies.propTypes = {
  // Il n'est plus nécessaire de spécifier pations et setPations en tant que props ici
};
