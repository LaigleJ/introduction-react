import React, { useContext } from "react";
import { TodoContext } from "./TodosProvider";
import { Check, CircleX, History } from "lucide-react";
import { useState } from "react";

export default function TodosList() {
    const {todos, updateTodos, deleteTodo} = useContext(TodoContext);

    async function deleteTodoId(id) {
       deleteTodo(id);
    }

    async function updateTodoId(id, status) {
        await updateTodos(id, status);
    }
    return (
        <>
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo._id} className="my-2 p-4 rounded-full bg-red-500 ">
                        {todo.content}
                        <div>
                            <button>
                                <CircleX color="black" onClick={() => deleteTodoId(todo._id)} />
                            </button>
                            <button onClick={() => updateTodoId(todo._id, !todo.done)}>
                        {todo.done ? 
                        
                            <History color="black"/>
                         : 
                        
                        <Check color="green" />
                        }
                        </button>
                        </div>
                        </li>
                )
            })}
        </ul>

        <TodoForm />
        </>
    )
}

/*Exercice:
Créer un composant: TodoForm
Ajouter un formulaire avec un bouton
Lors de la soumission, tester quele contenu ne soit pas vide, max. 100. (Sinon afficher un erreur).
Log la todo. */

export function TodoForm() {
    const { addTodo } = useContext(TodoContext);
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        setError('');

        // Validation des champs
        if (todo.length > 100) {
            setError('Le contenu ne peut pas avoir plus de 100 caractères');
            return;
        }
        if (todo.length === 0) {
            setError('Le contenu ne peut pas être vide');
            return;
        }

        addTodo(todo);

        // Logique après validation
        console.log('Tâche ajoutée:', todo);
        setTodo(''); // Réinitialise le champ d'entrée
    }

    return (
        <div>
            <form className="flex flex-col p-3" onSubmit={handleSubmit}>
                <label htmlFor="todo" className="mb-2">Ajouter une tâche</label>
                <input
                    type="text"
                    id="todo"
                    placeholder="Todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="border p-2 mb-2"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-green-500 text-white p-2">Ajouter</button>
            </form>
        </div>
    );
}

