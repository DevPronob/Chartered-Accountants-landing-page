const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://pronobroy3601:mGwdvLVLg3gcF8c6@cluster0.o3oxe.mongodb.net/`)

    console.log(`MongoDB Connected: `)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB