import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/database.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();

const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  connectDB();
  console.log(`server is running at ${port}`);
});
