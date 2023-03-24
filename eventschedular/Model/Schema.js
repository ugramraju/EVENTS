const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
}, {
    timestamps:true
})
module.exports = mongoose.model("User",userSchema)