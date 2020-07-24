const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    text:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Gethelp',dataSchema)