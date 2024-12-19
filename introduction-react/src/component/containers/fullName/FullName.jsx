import { FirstName } from "../firstName/FirstName";
import { LastName } from "../lastName/LastName";
import PropTypes from "prop-types"

export function FullName() {  
   return (
  <>
    <h2 className="title">Full Name</h2>
    <FirstName />
    <LastName />
  </>

   )
}

FullName.propTypes = {
    prenom: PropTypes.string,
    nom: PropTypes.string
}