const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://msrc:Is8UirnFX68bHEkg@crypto-notes.pae1ets.mongodb.net/?retryWrites=true&w=majority&appName=crypto-notes',{});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`MongoDB Error : ${err.message}`);
    process.exit();
  }
};

module.exports={connectDB};