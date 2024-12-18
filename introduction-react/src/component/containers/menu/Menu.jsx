import Button from "../UI/button/Button";
import { useState } from "react";

export function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenu() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <Button gereclique={toggleMenu}>{isVisible ? "hide" : "show"}</Button>

      <section className= { isVisible ? "visible" : "hidden" }>
      <h3>Menu Secret</h3>
      <ol>
        <li>Nourir le chien</li>
        <li>Faire mes devoirs</li>
        <li>Essayer des trucs en React</li>
      </ol>
      </section>
    </>
  );
}
