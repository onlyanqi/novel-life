// @author : Nupur Bhatt

const express = require("express");
const router = express.Router();
const taskController = require('../Controller/taskController');

router.post("/requestAssistance", requestAssistance);
module.exports = router;

function requestAssistance(request, response, next){
    taskController.createTask(request.body)
    .then((task) =>{
        if(task=="OK"){
            return response.status(201).json({message: "OK"});
        }
        else{
            return response.status(200).json({message: "ERROR"});
        }
    })
    .catch((error) => {
       return error;
    });
}
