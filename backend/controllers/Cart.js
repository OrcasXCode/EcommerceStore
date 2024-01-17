const CreateNewItem = require("../models/CreateItem");

async function addNewProduct(req, res) {
  try {
    const productId = req.body.productId;
    const title = req.body.title;
    const price = req.body.price;
    const discount = req.body.discount;
    const discountedPrice = req.body.discountedPrice;
    const imageSrc = req.body.image.src;

    const createNewProduct = await CreateNewItem.create({
      productId: productId,
      title: title,
      price: price,
      discount: discount,
      discountedPrice: discountedPrice,
      image: imageSrc,
    });
    if (createNewProduct) {
      return res.status(200).json({
        success: true,
        msg: "New Product created successfully",
        data: createNewProduct,
      });
    } else {
      return res.status(401).json({
        success: false,
        msg: "Failed to create new product",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Server error failed to add item in cart",
    });
  }
}

module.exports = {
  addNewProduct,
};
