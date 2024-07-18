import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
const schema = require('./schema/schema');
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}));

app.listen(port, console.log(`Backend Server is Running on ${port}`));
