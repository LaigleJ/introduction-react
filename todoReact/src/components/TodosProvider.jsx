import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export default function TodosProvider({children}) {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        fetch('/api/todos').then((response) => {
             response.json().then((data) => {
                setTodos(data)
             }
        )})
    }, []);

    async function addTodo(todo) {
        // Requête POST pour ajouter une tâche en base
        fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: todo }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l’ajout de la tâche.');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Tâche ajoutée en base:', data.todo);
                setTodos([...todos, data.todo]);
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    }

    async function deleteTodo(id) {
        // Requête DELETE pour supprimer une tâche en base
        fetch(`/api/todos/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la suppression de la tâche.');
                }
                return response.json();
            })
            .then((deletedTask) => {
                setTodos(todos.filter((todo) => todo._id !== id));
                console.log('Tâche supprimée en base:', deletedTask);
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    }

    async function updateTodos(id, status) {
        // Requête PUT pour mettre à jour une tâche en base
        const response = await fetch(`/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ done: status }),
        })
           const data = await response.json();
            setTodos(todos.map((todo) => todo._id === id ? data.todo : todo));
            console.log('Tâche mise à jour en base:', data);}

    return (
    <TodoContext.Provider value={{todos: todos, addTodo: addTodo, deleteTodo: deleteTodo, updateTodos: updateTodos}}>
        {children}
    </TodoContext.Provider>
    )
}