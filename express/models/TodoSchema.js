import mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
});

export default mongoose.model("Todo", TodoSchema);