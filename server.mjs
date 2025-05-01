import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.mjs';
import connectDB from './db/conn.mjs';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001
connectDB();



app.use(express.json());
//Routes


//Err Handling Middleware
app.use(errorHandler);

  
app.listen (PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`)
});