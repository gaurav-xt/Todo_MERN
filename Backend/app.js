import express from 'express'
import connectDb from "./config/db.js";
import dotenv from 'dotenv'

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`Server listing at ${PORT}`)
})

connectDb()

