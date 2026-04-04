import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const dbConnection = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to database ✅");
  } catch (error) {
    console.error("Database connection failed ❌:", error.message);
    process.exit(1);
  }
};
