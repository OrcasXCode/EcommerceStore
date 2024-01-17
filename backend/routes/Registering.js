const express = require("express");
const { sellerEmail } = require("../controllers/ContactUs");
const router = express.Router();

router.post("/AsSeller", sellerEmail);

module.exports = router;
