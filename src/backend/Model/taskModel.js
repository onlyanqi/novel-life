//@author: Nupur Bhatt

var mongoose =  require("mongoose");

var taskSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
	email: String,
	contactno: String,
    gender : String,
    age: Number,
    date: String,
    desc: String,
});

taskSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("assist", taskSchema);