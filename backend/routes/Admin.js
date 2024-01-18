const express = require("express");
const router = express.Router();
const { auth, isAdmin } = require("../middleware/auth");
const { getAllSellers } = require("../controllers/Admin");

router.post("/getAllSellers", auth, isAdmin, getAllSellers);

module.exports = router;
