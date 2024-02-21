import { models, model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { timestamps: true }
);

const Task = models.task || model("task", taskSchema);
export default Task;
