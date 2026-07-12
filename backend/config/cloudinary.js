import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  try {
    if (!process.env.CLOUDINARY_NAME || 
        !process.env.CLOUDINARY_API_KEY || 
        !process.env.CLOUDINARY_SECRET_KEY ||
        process.env.CLOUDINARY_NAME === 'demo_cloud') {
      console.log("⚠️  Using demo mode for image uploads");
      console.log("📝 For production, configure real Cloudinary credentials in .env file");
      return;
    }
    
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
    
    console.log("☁️  Cloudinary connected successfully");
  } catch (error) {
    console.log("❌ Cloudinary connection failed:", error.message);
    console.log("📝 Continuing in demo mode without image uploads");
  }
};

// Demo image upload function for development
export const demoImageUpload = (file) => {
  return {
    success: true,
    secure_url: `https://via.placeholder.com/400x400/4F46E5/white?text=${encodeURIComponent(file.originalname || 'Demo Image')}`,
    public_id: `demo_${Date.now()}`
  };
};

export default connectCloudinary;
