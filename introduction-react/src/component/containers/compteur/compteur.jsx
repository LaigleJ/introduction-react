import { useState } from "react";
import Button from "../UI/button/Button";

export default function Compteur() {
    const [compteur, setCompteur] = useState(0);

    function ajoute() {
        setCompteur(compteur + 1);
    }

    function supprime() {
        setCompteur(compteur - 1);
    }

    return (
        <>
        <h3 className="text-xl text-center">{compteur}</h3>
        <h3 className="text-xl text-center">{compteur * 2}</h3>
        <Button gereclique={ajoute}>
            <p>+1</p>
        </Button>
        <Button gereclique={supprime}>
            <p>-1</p>
        </Button>
        </>
    )
}