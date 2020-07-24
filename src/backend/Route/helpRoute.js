const express = require('express');
const router = express.Router();

const helpModel = require('../Model/help');
const complainModel = require('../Model/complaint');

/*
API Name : GET
Function : Fetching resources data

*/

router.get('/',(req,res)=>{
    helpModel.find()
    .then(data=>{

       return res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err);
    })
})

/*
API Name : POST
Function : Sending complaint data
*/

router.post("/complaint", (req, res) => {
    const em = req.body.email;
    complainModel.create({
        email : req.body.email,
        complaint : req.body.complaint
    })
    .then(data=>{      
        return res.status(200).json("Inserted")
    })
  });
  
  
module.exports = router;