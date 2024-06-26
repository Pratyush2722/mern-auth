import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.router.js'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log(err);
})
const app = express();

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});

app.use("/api/user",userRoutes);