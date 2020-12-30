const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    question:{
        type: String,
        required: true
    },
    option1:{
        type: String,
        required: true
    },
    option2:{
        type: String,
        required: true
    },
    option3:{
        type: String,
        required: true
    },

});
module.exports = mongoose.model('Symptom',dataSchema)