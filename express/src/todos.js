import express from "express";

export const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
    res.send('Récuperer tous les todos');
});

todosRouter.post("/", (req, res) => {
    res.send('Ajouter un todo');
});

todosRouter.delete("/:id", (req, res) => {    
    res.send('Supprimer un todo');
});

todosRouter.put("/:id", (req, res) => {
    res.send('Modifier un todo');
});
