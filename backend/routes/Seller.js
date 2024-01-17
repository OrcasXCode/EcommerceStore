const express = require("express");
const router = express.Router();
const { auth, isSeller } = require("../middleware/auth");
const { addNewProduct } = require("../controllers/Cart");

router.post("/addNewProduct", auth, isSeller, addNewProduct);

module.exports = router;
