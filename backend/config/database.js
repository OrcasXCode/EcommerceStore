const mongoose=require("mongoose")
require("dotenv").config();

const {MONGODB_URL}= process.env;


exports.connect=()=>{
    mongoose.connect(MONGODB_URL,{
        // useNewUrlparser:true,
        // useUnifiedTopology: true,
    })
    .then(console.log("DB Connection successfull"))
    .catch((error)=>{
        console.log(`Error in DB connection ${error}`);
        process.exit(1);
    })
}