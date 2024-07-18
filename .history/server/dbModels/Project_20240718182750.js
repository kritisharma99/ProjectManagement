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
    enum: ["Not Started", ""]
  },
});

const ProjectModel =
  mongoose.models.Client || mongoose.model("Project", ProjectSchema);

export default ProjectModel;
