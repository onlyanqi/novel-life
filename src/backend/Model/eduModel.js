// @author : Rishabh Baheti

var mongoose =  require("mongoose");

var EduSchema = new mongoose.Schema({
	name: String,
    hyperlink: String,
    path: String
},
{collection:'eduhelp'});

module.exports = mongoose.model("eduHelp", EduSchema);
