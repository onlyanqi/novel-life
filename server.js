//install express server
const express= require('express');
const path= require('path');

const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//serve only static file from build directory
app.use(express.static(__dirname+'/build/'));


const mongoURL  = 'mongodb+srv://siddhant:@Snomon708@cluster0-tjzjf.mongodb.net/help?retryWrites=true&w=majority'
const mongoose =  require('mongoose');
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json());

const helpRoute = require('./src/backend/Route/helpRoute');
app.use('/api/assist',helpRoute)

const userRoute = require('./src/backend/Route/userRoute');
app.use('/user', userRoute);

//start the app by listening on default port
app.listen(process.env.PORT || 8080);