import { mongoose, Schema, Document } from "mongoose";

const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Client name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const ClientModel =
  mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default ClientModel;
