import Button from "../UI/button/Button";

export function Header() {

  function supprime() {
    alert("Supprime");
  }

  return (
    <header className="container">
      <h1 className="title">Bienvenue</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        doloremque deleniti ut. Libero illo, quis quam ipsam cupiditate nulla
        voluptatem sapiente incidunt excepturi sunt ab nihil asperiores. Cumque,
        praesentium officia.
      </p>
      <Button gereclique={supprime}>
        <p>Supprimer</p>
      </Button>
    </header>
  );
}
