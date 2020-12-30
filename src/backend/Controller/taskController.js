// @author : Nupur Bhatt

const Task = require('../Model/taskModel');

async function createTask(taskParams){

    //check if the same task does not exist.

    try{
    const res = await Task.find({email: taskParams.email, date: taskParams.date});
    if(res == null || res == ""){
        var newtask = new Task();
        newtask.email = taskParams.email;
        newtask.firstname = taskParams.firstname;
        newtask.lastname = taskParams.lastname;
        newtask.contactno = taskParams.contactno;
        newtask.gender = taskParams.gender;
        newtask.age = taskParams.age;
        newtask.date = taskParams.date;
        newtask.desc = taskParams.desc;
        await newtask.save();
        return "OK";
    }
    else{
        return "ERROR";
    }
}
    catch(error){
        return error;
    }
}
module.exports = {
    createTask
}
