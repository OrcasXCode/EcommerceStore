const mongoose=require("mongoose")

const ViewCartSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    price:{
        type:Number,
    },
    DiscountedPrice:{
        type:Number
    },
    Discount:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    image:{
        type:String
    }
})

const ViewCart=mongoose.model("ViewCart",ViewCartSchema)
module.exports=ViewCart
//imp
// ViewCart.create is not a function