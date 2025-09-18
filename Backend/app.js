import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/taskRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json()); // to parse JSON body

app.use("/users", userRoutes); // register routes

app.listen(PORT, () => {
  console.log(`Server listing at ${PORT}`);
});

connectDb();
