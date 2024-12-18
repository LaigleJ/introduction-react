import PropTypes from "prop-types"

export function LastName({children}) {
    return (
        <>
        <p>{children}</p>
        </>
    )
}

LastName.propTypes = {
    children: PropTypes.node.isRequired
}