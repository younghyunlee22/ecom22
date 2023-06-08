import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from './routes/auth.js';
import router from "./routes/auth.js";

dotenv.config(); /*loads the variables from a .env file 
                    and sets them as environment variables in the current running process */

const app = express(); //excute express

// db

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB ERROR => ", err));

// router middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 8000; 
// "process.env.PORT" in Node.js: port number on which a server should listen for incoming requests 

app.listen(8000, () => {
    console.log(`Node server is running on port ${port}`);
});
