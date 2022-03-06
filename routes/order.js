const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();

const Order=require("../models/order");

router.use(express.urlencoded({extended:true}));

router.post("/", async (req, res)=>{
       /*
     the order from the web contains 
        customerId, writtingMode, essayType, educationLevel, pageCount, doubleSpaces, deadline and description 
     we need to insert 
        paid and delivered before saving it
    */
   req.body.customerId="0xdfsdjifjei493"; //debug
   req.body.paid=false; //release
   req.body.delivered=false; //release

   let order=new Order(req.body);
   await order.save()
   res.json(order);
})

router.post("/update", (req, res)=>{
    Order.findById(req.body.id)
    .then(d=>{
        for(let e in req.body){
            if(e=='id') continue;
            d[e]=req.body[e];
        }
        d.save()
        .then(ans=>{
            res.json(ans);
        })
    })
    .catch(e=>{
        res.json(e);
    })
})

router.get("/id/:id", (req,res)=>{
    Order.findById(req.params.id)
    .then(d=>{
        res.json(d);
    }).catch(e=>{
        res.json(e);
    })
})

router.get("/", (req, res)=>{
    Order.find().then(d=>{
        res.json(d);
    }).catch(e=>{
        res.json(e);
    })
})

module.exports=router;