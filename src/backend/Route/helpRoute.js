/**
 * @author by siddhant ashutosh
 */


const express = require('express');
const router = express.Router();

const helpModel = require('../Model/help');
const complainModel = require('../Model/complaint');
const symptom = require('../Model/symptom');
const symptomans = require('../Model/symptomans');

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
  
  
/*
API Name : GET
Function : Sending symptiom questions data
*/

router.get('/symptom',(req,res)=>{
    symptom.find()
    .then(data=>{
       return res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err);
    })
})

/*
API Name : Get
Function : Sending answers data
*/

router.get('/answers',(req,res)=>{
    symptomans.find()
    .then(data=>{
       return res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err);
    })
})  


module.exports = router;