import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, console.log(`Backend Server is Running on ${port}`));
