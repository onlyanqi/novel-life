//install express server
const express= require('express');
const path= require('path');

const app = express();
const cors=require('cors');
app.use(cors());


//serve only static file from build directory
app.use(express.static(__dirname+'/build/'));


const mongoURL  = 'mongodb+srv://siddhant:@Snomon708@cluster0-tjzjf.mongodb.net/help?retryWrites=true&w=majority'
const mongoose =  require('mongoose');
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json());

const userRoute = require('./src/backend/Route/helpRoute');
app.use('/api/assist',userRoute)

//start the app by listening on default port
app.listen(process.env.PORT || 8080);