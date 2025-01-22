import TodoSchema from "./models/TodoSchema.js";

export const TodoRepository = {
  create: async (data) => {
    const newTodo = new TodoSchema(data);
    const savedTodo = await newTodo.save();
    return savedTodo;
  },
  findById: async (id) => {
    try {
      return await TodoSchema.findById(id);
    } catch (error) {
      console.log(error);
      return null
    }
  },
  findAll: async () => {
    return await TodoSchema.find();
  },
  update: async (id, data) => {
    const updatedTodo = await TodoSchema.findByIdAndUpdate( id , data, {new: true});
    return updatedTodo;
  },
  delete: async (id) => {
    return await TodoSchema.deleteOne({ _id: id });
  }
}