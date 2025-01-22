import express, { query } from "express";
import { TodoRepository } from "../todo-repository.js";

export const todosRouter = express.Router();

todosRouter.get("/", async (req, res) => {
    const allTodos = await TodoRepository.findAll();
    res.json(allTodos);
});

todosRouter.post("/", async (req, res) => {
    const newTodoContent = req.body.content;

  if(!newTodoContent || newTodoContent === "") {
    return rep.status(400).json({message: "contenu obligatoire"})
  }

  const newTodo ={
    content: newTodoContent,
    done: false,
  };
const savedTodo = await TodoRepository.create(newTodo);
  res.json({message: 'Créer une tache', todo:savedTodo})
});

todosRouter.delete("/:id", verifyBuId, async (req, res) => { 
    const id = req.params.id;
     
    await TodoRepository.delete(id);
    res.json({message: 'Supprimer un todo'});
});

todosRouter.put("/:id", verifyBuId, async (req, res) => {
    const id = req.params.id;
    const todo = await TodoRepository.findById(id);

    const content = req.body.content;
    const done = req.body.done;
    const newTodo = {
        content: content ? content : todo.content,
        done: done !== null ? done : todo.done
    }
    const updatedTodo = await TodoRepository.update(id, newTodo);
    res.json({message:'Modifier un todo', todo: updatedTodo});
});

async function verifyBuId(req, res, next) {
    const id = req.params.id;
    const todo = await TodoRepository.findById(id);
    if(!todo) {
        return res.status(404).json({message: "todo introuvable"});
    }
    next();
}