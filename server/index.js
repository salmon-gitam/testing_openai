import express from "express";
import { configDotenv } from "dotenv";

const app = express()
configDotenv()


app.get("/",(req,res)=>{
    res.send("Welcome")
    console.log(process.env.OPENAI_API)
})

app.listen(3000,(req,res)=>{
    console.log("Server started at 3000...")
})