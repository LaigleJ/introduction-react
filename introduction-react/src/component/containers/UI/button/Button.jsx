import PropTypes from "prop-types";

export default function Button({color, children}) {
    return (
        <button 
        className="text-neutral-200 p-2 rounded"
        style={{
            backgroundColor: color ? color : "black"
        }}>{children}</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node
}