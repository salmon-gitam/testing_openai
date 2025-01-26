import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(3000,(req,res)=>{
    console.log("Server started at 3000...")
})