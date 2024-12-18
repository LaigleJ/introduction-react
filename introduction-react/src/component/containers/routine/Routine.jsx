import Button from "../UI/button/Button"

export function Routine() {
    function manger() {
        alert("Manger")
    }

    function dormir() {
        alert("Dormir")
    }

    function etudier() {
        alert("Etudier")
    }
    return (
       <>
       <Button color="green" gereclique={manger}>
           <p>Manger</p>
       </Button>
       <Button color="red" gereclique={dormir}>
           <p>Dormir</p>
       </Button>
       <Button color="blue" gereclique={etudier}>
           <p>Etudier</p>
       </Button>
       </>
    )
}