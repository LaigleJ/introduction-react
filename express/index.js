import express from "express";
import { todosRouter } from "./src/todos.js";

const PORT = 5000;
const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

app.use(loggerMiddleware);

app.use("/api/todos", todosRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});