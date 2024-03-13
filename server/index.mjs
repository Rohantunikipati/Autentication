import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.mjs"
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
  });

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user",userRoute);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
