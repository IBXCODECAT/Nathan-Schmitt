import dotenv from 'dotenv';
import mongoose from "mongoose";

// Load env vars
dotenv.config();

// Load Secrets from .env file
const uri = process.env.MONGO_URI;

//Verify a string was pulled from the env file and that the env file exists
if(uri === undefined) {
  console.error("MongoDB URI is undefined. Check .env file.")
  process.exit(1);
}

async function connectDB() {
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB is Connected...");
  }
  catch(err) {
    console.log(err);
  }
  finally {
    mongoose.connection.close();
  }

}

export default connectDB;