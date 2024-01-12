const express = require("express")
const app=express()
const PORT=process.env.PORT || 3000
const dotenv=require("dotenv")
const database=require("../backend/config/database")
const viewcartRoutes=require("../backend/routes/ViewCart")
const cookieParser=require("cookie-parser")

app.use(express.json())
app.use(cookieParser())
dotenv.config();
database.connect();




app.use("/api/v1/cart",viewcartRoutes)




app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})



