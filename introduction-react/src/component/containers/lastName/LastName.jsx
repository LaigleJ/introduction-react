import PropTypes from "prop-types"

export function LastName({nom}) {
    return (
        <>
        <p>{nom}</p>
        </>
    )
}

LastName.propTypes = {
    nom: PropTypes.string
}