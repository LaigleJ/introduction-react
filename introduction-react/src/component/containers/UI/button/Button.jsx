import PropTypes from "prop-types";

export default function Button({color, children}) {
    return (
        <button 
        className="text-neutral-200 p-2 rounded-full hover:shadow-white w-24 b-none "
        style={{
            backgroundColor: color ? color : "black"
        }}>{children}</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired
}