import { useState, useContext } from "react";
import { UtilisateurContext } from "../../../App";

export function Hobbies() {
  // Récupération des données utilisateur via useContext
  const user = useContext(UtilisateurContext);

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

  const [pations, setPations] = useState([]); 
  const [newHobby, setNewHobby] = useState("");
  const [error, setError] = useState("");
  const [nextId, setNextId] = useState(4); 

  const handleInputChange = (event) => {
    setNewHobby(event.target.value);

    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleAddHobby = () => {
    if (newHobby.trim() === "") {
      setError("Le champ ne peut pas être vide."); 
      return;
    }

    if (pations.some((hobby) => hobby.name === newHobby)) {
      setError("Ce hobby existe déjà.");
      return;
    }

    const newHobbyObject = {
      id: nextId, 
      name: newHobby,
    };

    setPations([...pations, newHobbyObject]);

    setNextId(nextId + 1);

    setNewHobby("");
    setError("");
  };

  return (
    <>
      {/* Message de bienvenue basé sur le contexte utilisateur */}
      {user && (
        <p>
          Bienvenue, <strong>{user.name}</strong> ! Voici vos hobbies :
        </p>
      )}

      <h2 className="title">Hobbies</h2>

      <ul>
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
