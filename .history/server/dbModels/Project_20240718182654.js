import { mongoose, Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "Project name is required"],
  },
  description: {
    type: String,
    required: [true, "Email is required!"],
  },
  status: {
    type: String,
  },
});

const ProjectModel =
  mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default ProjectModel;
