import express from "express";
import { todosRouter } from "./src/todos.js";
import { connectToMongo } from "./db.js";
import bodyParser from "body-parser";
import User from "./models/User.js";

const PORT = 5000;
const app = express();

connectToMongo();

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

app.use(loggerMiddleware);
app.use(express.static("public"));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", todosRouter);
app.use(bodyParser.json());

app.post("/users", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = new User({ name, email, age });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});