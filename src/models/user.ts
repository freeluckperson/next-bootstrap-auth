import mongoose, { Model, model, models, Schema, Document } from "mongoose";

interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    fullName: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = (Model<IUser> = models.user || model<IUser>("user", userSchema));
export default User;
