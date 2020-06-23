//install express server
const express= require('express');
const path= require('path');

const app = express();

//serve only static file from build directory
app.use(express.static(__dirname+'/build/'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

//start the app by listening on default port
app.listen(process.env.PORT || 8080);