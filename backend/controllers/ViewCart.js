const CartItem = require("../models/ViewCart");



async function createCartItems(req,res){
    try{
        const title=req.body.title;
        const price=req.body.price;
        const discount=req.body.discount;
        const discountedPrice=req.body.discountedPrice;
        const quantity=req.body.quantity;
        const imageSrc=req.body.image.src

        const addInCart=await CartItem.create({
            title,
            price,
            discount,
            discountedPrice,
            // image:image.secure_url
            image: imageSrc,
            quantity
        })

        res.status(200).json({
            success:true,
            msg:"Item added in cart successfully",
            data:addInCart
        })

    }
    catch(error){
        console.log("Error in view cart:")
        console.log(error)
    }
}



async function getAllCartItems(req,res){
    try{
        const allCartItems=await CartItem.find({

        })
        res.status(200).json({
            success: true,
            msg:"all cart items fetched successfully",
            allCartItems
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            msg:"Server error failed to get all cart items"
        })
    }
}


module.exports={createCartItems,getAllCartItems}
//router.post requries a call back function
