const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const ConnectionDB = require("./DBConnection/MongoDBConnection")
const app = express();
const userRouter = require("./Routes/Routes")
const port = process.env.port || 8000;
ConnectionDB();
app.use(express.json())
app.use("/",userRouter);
app.listen((port),()=>{
    console.log(`port listen on ${port}`)
})
