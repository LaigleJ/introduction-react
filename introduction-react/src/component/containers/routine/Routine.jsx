import Button from "../UI/button/Button";

export function Routine() {
  function manger() {
    alert("Manger");
  }

  function dormir() {
    alert("Dormir");
  }

  function etudier() {
    alert("Etudier");
  }

  function alertMoi(action) {
    alert(action);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 p-11">
        <Button color="green" gereclique={manger}>
          <p>Manger</p>
        </Button>
        <Button color="red" gereclique={dormir}>
          <p>Dormir</p>
        </Button>
        <Button color="blue" gereclique={etudier}>
          <p>Etudier</p>
        </Button>
        <Button color="yellow" gereclique={() => alertMoi('alertMoi')}>
          <p>Alert moi</p>
        </Button>
      </div>
    </>
  );
}
