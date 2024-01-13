const mongoose=require("mongoose")

const CartItemSchema=new mongoose.Schema({
    productId:{
        type:Number
    },
    title:{
        type:String,
    },
    price:{
        type:Number,
    },
    discountedPrice:{
        type:Number
    },
    Discount:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    image:{
        type:String
    }
})

const CartItem=mongoose.model("CartItem",CartItemSchema)
module.exports=CartItem
//imp
// ViewCart.create is not a function