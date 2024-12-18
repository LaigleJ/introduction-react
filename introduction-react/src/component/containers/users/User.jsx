import { FullName } from "../fullName/FullName";
import { Hobbies } from "../hobbies/Hobbies";
import { Player } from "../player/Player";
import PropTypes from "prop-types"

export function User({utilisateur}) {
    return (
            <>
            <FullName prenom={utilisateur.firstName} nom={utilisateur.lastName}/>
            <Hobbies pations={utilisateur.hobbies}/>
            <Player />
            </>
    )
}

User.propTypes = {
    utilisateur: PropTypes.object
}