import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    
    if (!process.env.MONGODB_URI) {
      console.log("⚠️  MONGODB_URI not found in environment variables");
      console.log("📝 Database connection skipped - running in demo mode");
      return;
    }
    
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
  } catch (error) {
    console.log("❌ Database connection failed:", error.message);
    console.log("📝 Server will continue running without database");
  }
};

export default connectDB;
