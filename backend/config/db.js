import mongoose from "mongoose";


 const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1); // 1 code means failure, 0 means success.
  }
};

export default connectDB;