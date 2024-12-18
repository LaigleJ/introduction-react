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

      <section className={`${
            isVisible ? "hidden" : "block"
          } transition-all duration-300 ease-in-out mt-6 bg-gray-500 shadow-xl rounded-lg p-6 w-64`}  >
      <h3 className="text-xl text-center">Menu Secret</h3>
      <ol className="list-decimal gap-1">
        <li>Nourir le chien</li>
        <li>Faire mes devoirs</li>
        <li>Essayer des trucs en React</li>
      </ol>
      </section>
    </>
  );
}
