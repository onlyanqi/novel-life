/**
 * @author by siddhant ashutosh
 */


//schema for stooring website complaints
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    complaint:{
        type: String,
        required: true
    },
    versionKey: false
});
module.exports = mongoose.model('Getcomplaint',dataSchema)