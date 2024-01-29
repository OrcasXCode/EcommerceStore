const User = require("../models/User");

async function getMyProducts(req, res) {
  try {
    //get the seller
    const seller = await User.findById(req.user._id).populate({
      path: "productsOnSale",
      model: "CreateNewItem",
    });

    if (!seller || seller.length === 0) {
      return res.status(403).json({
        success: false,
        msg: "No products found",
      });
    }

    //aur response mein bhej do
    return res.status(200).json({
      success: true,
      msg: "all products fethched successfully",
      seller,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Server Error error cannot get the products",
    });
  }
}

// async function getAllSellers(req, res) {
//   try {
//     // Get all sellers with userType "Seller"
//     const allSellerDetails = await User.find({
//       userType: "Seller",
//     }).populate({
//       path: "productsOnSale",
//       model: "CreateNewItem",
//     });

//     // Check if any sellers are found
//     if (!allSellerDetails || allSellerDetails.length === 0) {
//       return res.status(403).json({
//         success: false,
//         msg: "No Seller found",
//       });
//     }

//     // Extract relevant information from each seller
//     const sellerDetails = allSellerDetails.map((seller) => {
//       return {
//         // response mein humko yeh chahiye
//         id: seller._id,
//         name: seller.name,
//         email: seller.email,
//         productsOnSale: seller.productsOnSale,
//       };
//     });

//     // Return the seller details in the response
//     return res.status(200).json(sellerDetails);
//   } catch (error) {
//     console.log("Error in getting all sellers: ", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error to get all the sellers",
//     });
//   }
// }

module.exports = {
  getMyProducts,
};
