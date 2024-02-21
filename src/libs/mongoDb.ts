import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("→ Connection to Db successful");
  } catch (error) {
    console.log(error);
  }
};
