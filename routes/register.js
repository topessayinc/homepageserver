const express=require("express");
const mongoose=require("mongoose");
const  router=express.Router();

const customer=require("../models/customer");

router.use(express.urlencoded({extended:true}));

router.post("/", async (req, res)=>{
    let user=new customer(req.body);
    console.log(req.body);
    await user.save();
    let d= await customer.find();
    console.log(d);
    res.json(d);
})

router.get("/", async (req, res)=>{
    customer.find()
    .then(d=>{
        res.json(d);
    })
});

module.exports=router;