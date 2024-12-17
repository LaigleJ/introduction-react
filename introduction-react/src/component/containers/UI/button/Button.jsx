export default function Button({color}) {
    return (
        <button style={{
            backgroundColor: color ? color : "black",
            color: "whitesmoke",
            padding: "0.7em",
            border: "none",
            borderRadius: "5px"
        }}>Valider</button>
    )
}