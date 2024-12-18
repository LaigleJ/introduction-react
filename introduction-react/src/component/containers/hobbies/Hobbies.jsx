import PropTypes from "prop-types";
import { useState } from "react";

export function Hobbies({ pations }) {
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

  const [newHobby, setNewHobby] = useState(""); 
  const [error, setError] = useState(""); 

  const handleInputChange = (event) => {
    setNewHobby(event.target.value);

    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleAddHobby = () => {
    if (newHobby.trim() === "") {
      setError("Le champ ne peut pas être vide."); // Afficher une erreur si le champ est vide
      return;
    }

    if (pations.includes(newHobby)) {
      setError("Ce hobby existe déjà."); // Empêche d'ajouter un doublon
      return;
    }

    console.log("Hobby ajouté :", newHobby); 

    setNewHobby(""); // Réinitialiser le champ
    setError(""); // Réinitialiser l'erreur
  };

  return (
    <>
      <h2 className="title">Hobbies</h2>
      <ul>
        {hobbiesDb.map((hobby) => {
          return (
            <li
              key={hobby.id}
              style={{
                padding: "10px",
                border: "1px solid white",
                margin: "0.5em",
              }}
            >
              {pations.includes(hobby.name) ? <strong>{hobby.name}</strong> : hobby.name}
            </li>
          );
        })}
      </ul>

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
  pations: PropTypes.array.isRequired,
};
