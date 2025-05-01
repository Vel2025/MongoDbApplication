import express from 'express';
import dotenv from 'dotenv';
//import db from './db/conn.mjs';
//import gradeRoutes from './routes/gradeRoutes.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001



app.use(express.json());
//Routes


//Err Handling Middleware
app.use((err, req, res, next)=>{
    res.status(500).json({msg:'Server Error'})
});

  
app.listen (PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`)
});