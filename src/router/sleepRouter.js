const express = require("express");
const Sleep=require('../models/sleep')
const router = new express.Router();


// add milk

router.post('/create',async (req,res)=>{
  try {
    const sleep=new Sleep({
      ...req.body
    })
    await sleep.save();
    res.status(201).send(sleep);
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports=router