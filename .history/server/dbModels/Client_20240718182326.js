import { mongoose, Schema, Document } from "mongoose";

const ClientSchema = new Schema({
    name:{
        type: String,
        required: [true, "Client name is required"],
    },
    email: {
        type: String,
        required:[true, "Email is required!"],
        unique: true,
    },
    password: {
        type: String,
    }
})
