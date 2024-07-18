import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
dotenv.config();
const port = process.env.PORT || 3000;

app.use({ graphqlHTTP})

const app = express();

app.listen(port, console.log(`Backend Server is Running on ${port}`));
