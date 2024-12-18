import Button from "../UI/button/Button";

export function Footer() {
    function ajoute() {
        alert("Ajoute")
    }
    return (
        <footer>
            <p>Copyright 2024</p>
            <Button color="red" gereclique={ajoute}>
                <p>Ajouter</p>
            </Button>
        </footer>
    )
}