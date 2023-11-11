require('dotenv').config();

const mongoose = require('mongoose');



async function connectDB(){
  
     mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true});
     try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log("Database Connected Successfully");

     }catch(err){
        
  throw err

     }
}

module.exports = connectDB;