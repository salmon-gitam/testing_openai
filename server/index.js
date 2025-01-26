import express from "express";
import { configDotenv } from "dotenv";
import OpenAI from "openai";

const app = express()
configDotenv()

let response = ""

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});




app.get("/",(req,res)=>{
    res.send("Welcome")
    console.log(process.env.OPENAI_API_KEY)
})

app.get("/ai",async (req,res)=>{
    
        const stream = await openai.chat.completions.create({
            model: "o1-preview",
            messages: [{ role: "user", content: "Which is better bike or scooter?" }],
            store: true,
            stream: true,
        });
        for await (const chunk of stream) {
            response = response + chunk.choices[0]?.delta?.content || "";
        }

        console.log(response)
})

app.listen(3000,(req,res)=>{
    console.log("Server started at 3000...")
})
