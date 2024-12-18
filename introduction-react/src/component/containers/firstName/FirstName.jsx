import PropTypes from "prop-types"

export function FirstName({children}) {
    return (
        <>
        <p>{children}</p>
        </>
    )
}

FirstName.propTypes = {
    children: PropTypes.node.isRequired
}