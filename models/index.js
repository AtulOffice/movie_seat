import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import crewcastRoutes from "./routes/castcrew.route.js";

import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", movieRoutes);
app.use("/api/v1", crewcastRoutes);

connectDB();
app.listen(5000, () => {
  console.log("server started at localhost 5000");
});
