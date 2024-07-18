import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schemas/schema.js";
import colors from "colors";

import connectDB from "./config/dbConnection.js";

dotenv.config();
const port = process.env.PORT || 3000;
//Connect DB
connectDB();

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Backend Server is Running on ${port}`));
