import { mongoose, Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "Client name is required"],
  },
  description: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"],
  },
  status: {
    type: String,
  },
});

const ClientModel =
  mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default ClientModel;
