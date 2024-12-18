import { FirstName } from "../firstName/FirstName";
import { LastName } from "../lastName/LastName";
import PropTypes from "prop-types"

export function FullName({children}) {
   return (
  <>
    <h2 className="title">Full Name</h2>
    <FirstName>{children}</FirstName>
    <LastName>{children}</LastName>
  </>

   )
}

FullName.propTypes = {
    children: PropTypes.node.isRequired
}