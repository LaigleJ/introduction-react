import { UtilisateurContext } from "../../../App"
import  { useContext } from "react"
export function LastName() {
    const user = useContext(UtilisateurContext);
    return (
        <>
        <p>{user.lastName}</p>
        </>
    )
}

