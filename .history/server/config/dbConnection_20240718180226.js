import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from "dotenv";
dotenv.config();
console.log("MONGO_URI.............", process.env.MONGO_URI);


const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connection : ${conn.connection.host}`.cyan.underline.bold);
};

export default connectDB;
