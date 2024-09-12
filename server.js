import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

//app-config
const port=5000;
const app=express();


connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());


//initilation

app.use("/api/song",songRouter)
app.use("/api/album",albumRouter)


app.get("/",(req,res)=>{
res.send("api Working")

})


app.listen(4000,()=>console.log("server started"));

