import { useEffect } from "react";
import { useState } from "react";

const GetCharacters = "https://thronesapi.com/api/v2/Characters";

async function getCharacters() {
  const response = await fetch(GetCharacters);
  /* const data = await response.json();
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return data;*/

  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function Got() {
  const [persos, setPersos] = useState([]);
  useEffect(() => {
    getCharacters().then((personnage) => {
      setPersos(personnage);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-pink-900 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Game of Thrones</h2>
      {persos.map((personnage) => (
        <div key={personnage.id} className="flex items-center space-x-2">
          <img
            src={personnage.imageUrl}
            alt={personnage.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="text-gray-100">
            <h3 className="text-lg font-bold">{personnage.name}</h3>
            <p className="text-sm">{personnage.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
