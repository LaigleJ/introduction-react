import PropTypes from "prop-types"

export function FirstName({prenom}) {
    return (
        <>
        <p>{prenom}</p>
        </>
    )
}

FirstName.propTypes = {
    prenom: PropTypes.string.isRequired
}