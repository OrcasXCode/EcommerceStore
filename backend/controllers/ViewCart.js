const ViewCart = require("../models/ViewCart");




async function ViewCartItems(req,res){
    try{
        const title=req.body.title;
        const price=req.body.price;
        const discount=req.body.discount;
        const discountedPrice=req.body.discountedPrice;
        const quantity=req.body.quantity;
        const image=req.files.image;

        const addInCart=await ViewCart.create({
            title,
            price,
            discount,
            discountedPrice,
            image:image.secure_url,
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


module.exports=ViewCartItems
//router.post requries a call back function
