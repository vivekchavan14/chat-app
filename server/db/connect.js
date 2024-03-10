import mongoose from 'mongoose';

const connect = async(req,res) => {
      try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
      } catch (error) {
  console.log('Error connecting to MongoDB',error.message)
      }
}

export default connect