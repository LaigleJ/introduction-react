import { FullName } from "../fullName/FullName";
import { Hobbies } from "../hobbies/Hobbies";
import { Player } from "../player/Player";
import PropTypes from "prop-types"

export function User() {
    return (
            <>
            <FullName />
            <Hobbies />
            <Player />
            </>
    )
}

User.propTypes = {
    utilisateur: PropTypes.object
}