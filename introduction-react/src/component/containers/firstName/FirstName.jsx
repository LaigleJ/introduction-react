import { UtilisateurContext } from "../../../App"
import  { useContext } from "react"

export function FirstName() {
    const user = useContext(UtilisateurContext);
    return (
        <>
        <p>{user.firstname}</p>
        </>
    )
}

