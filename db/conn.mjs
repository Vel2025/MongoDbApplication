//imports
import mongoose from "mongoose";
import dotenv from 'dotenv';

//setups
dotenv.config();
const connectionStr = process.env.mongoURI;

//function to connect to MongDB via mongoose
async function connectDB()
{
    try{
    await mongoose.connect(connectionStr);
    console.log('connected to MongDB...');
    }
    catch(e)
    {
        console.error(e);
    }
}

export default connectDB;