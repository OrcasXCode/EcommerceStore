const User = require("../models/User");

async function getAllSellers(req, res) {
  try {
    const AdminId = req.user._id;

    //note :- unesessary passing of email and pass

    const AdminDetails = await User.findById(AdminId);
    if (!AdminDetails) {
      console.log("Admin Id is:", AdminId);
      return res.status(404).json({
        success: false,
        msg: "Admin not found",
      });
    }

    const allSellerDetails = await User.find({
      userType: "Seller",
    });

    //get all seller ids
    //note
    const sellerIds = allSellerDetails.map((seller) => seller._id);
    console.log("All seller details ", allSellerDetails._id);

    await User.findByIdAndUpdate(
      {
        //note only AdminId not AdminId._id
        _id: AdminId,
      },
      {
        $push: {
          allSellers: sellerIds,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "All Sellers added successfully",
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
