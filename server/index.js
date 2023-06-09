import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT_APP || 3000;
app.use(express.json());
app.use('/api/workouts',workoutRoutes);

app.use((req,res,next)=>{
    console.log(`user get to path : ${req.path}`);
    console.log(`user use method : ${req.method}`);
    next();
});


mongoose.connect(process.env.MONGO_DB).then(()=>{
    app.listen(PORT,()=>console.log(`run in port ${PORT}`));
}).catch((err)=>console.log(err));