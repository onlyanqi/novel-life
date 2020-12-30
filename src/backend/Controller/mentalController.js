// @author : Rishabh Baheti

const Mental = require("../Model/mentalModel");

function getAllMentalHelp(){
    return Mental.find();
}

module.exports = {getAllMentalHelp};