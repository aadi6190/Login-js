import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", UserRouter);

mongoose.connect("mongodb://127.0.0.1:27017/authentication", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
