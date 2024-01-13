const express = require("express")
const app=express()
const PORT=process.env.PORT || 3000
const dotenv=require("dotenv")
const database=require("./config/database")
const cartRoutes=require("./routes/ViewCart")
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/files', express.static("files"));
dotenv.config();
database.connect();




app.use("/api/v1/cart",cartRoutes)





app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})



