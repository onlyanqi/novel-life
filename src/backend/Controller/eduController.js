// @author : Rishabh Baheti

const Educational = require("../Model/eduModel");

function getAllHelp(){
    return Educational.find();
}

module.exports = {getAllHelp};