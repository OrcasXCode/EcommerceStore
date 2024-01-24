const User = require("../models/User");

async function getAllSellers(req, res) {
  try {
    // const AdminId = req.user._id;

    //note :- unnecessary passing of email and pass

    // const AdminDetails = await User.findById(AdminId);
    // if (!AdminDetails) {
    //   console.log("Admin Id is:", AdminId);
    //   return res.status(404).json({
    //     success: false,
    //     msg: "Admin not found",
    //   });
    // }

    // Get all sellers with userType "Seller"
    const allSellerDetails = await User.find({
      userType: "Seller",
      //jo already list mein h usko firse nhi dalna h
      // _id: { $nin: AdminDetails.allSellers },
    }).populate({
      path: "productsOnSale",
      model: "CreateNewItem",
    });

    // Check if any sellers are found
    if (!allSellerDetails || allSellerDetails.length === 0) {
      return res.status(403).json({
        success: false,
        msg: "No Seller found",
      });
    }

    // Extract relevant information from each seller
    const sellerDetails = allSellerDetails.map((seller) => {
      return {
        // response mein humko yeh chahiye
        id: seller._id,
        name: seller.name,
        email: seller.email,
        productsOnSale: seller.productsOnSale,
        // Add other properties as needed
      };
    });

    // Return the seller details in the response
    return res.status(200).json({
      success: true,
      msg: "Seller details retrieved successfully",
      sellers: sellerDetails,
    });
  } catch (error) {
    console.log("Error in getting all sellers: ", error);
    return res.status(500).json({
      success: false,
      message: "Server Error to get all the sellers",
    });
  }
}

module.exports = {
  getAllSellers,
};
