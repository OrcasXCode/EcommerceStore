const express=require("express");
const router=express.Router();
const ViewCart=require("../controllers/ViewCart");


router.post("/viewcart",ViewCart)

module.exports=router
