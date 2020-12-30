/**
 * @author by siddhant ashutosh
 */

// schema for getting covid-19 related information
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    text:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Gethelp',dataSchema)