import express from "express";

//importing routes
import userRoute from './routes/user.routes.js';
import { connectDB } from "./utils/feature.js";

const port =3000;

connectDB();

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API WOrking with /api/v1")
})

//using Routes
app.use("/api/v1/user",userRoute);


app.listen(port,()=>{
    console.log(`server is working on https://localhost:${port}`);
    
})