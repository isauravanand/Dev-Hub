const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./Routes/userRoutes");

//Databse Connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/socialMediaApp');
}
main()
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log("Error in Database",err);
})

app.use("/api/auth",userRoute);

app.listen(port,()=>{
    console.log("App is listening on the port 8080");
})