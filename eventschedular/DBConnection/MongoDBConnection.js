const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Data Base Connected SuccessFully")
    }
    catch(err){
           console.log(err)
    }
}
module.exports = connectDB;