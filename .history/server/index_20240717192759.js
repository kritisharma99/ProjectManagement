import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use("/graphql", graphqlHTTP({}));

app.listen(port, console.log(`Backend Server is Running on ${port}`));
