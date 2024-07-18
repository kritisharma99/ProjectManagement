import { mongoose, Schema, Document } from "mongoose";

const ClientSchema = new Schema({
    name:{
        type: String,
        required: [true, "Client name is required"],
    }
})
