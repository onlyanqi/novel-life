const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    positiveanswer:{
        type: Array,
        required: true
    },
    negativeanswer:{
        type: Array,
        required: true
    },
    versionKey: false
});
module.exports = mongoose.model('Answer',dataSchema)