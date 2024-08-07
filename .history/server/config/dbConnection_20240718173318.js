import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`DB Connection : ${conn.connection.host}`.cyan.underline.bold);
};

export default connectDb
