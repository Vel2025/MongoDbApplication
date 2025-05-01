import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error.mjs';
import connectDB from './db/conn.mjs';
import countryRoutes from './routes/countries.mjs';
import continentRoutes from './routes/continents.mjs';
import languageRoutes from './routes/languages.mjs';
import populateData from './data/sampleData.mjs';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001
connectDB();


//middleware
app.use(express.json());
//Routes
app.use('/api/countries', countryRoutes);
app.use('/api/continents', continentRoutes);
app.use('/api/languages', languageRoutes);

// Populate sample data on server start
populateData();

//Err Handling Middleware
app.use(errorHandler);

  
app.listen (PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`)
});