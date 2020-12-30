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
app.use('/api/user', userRoute);

const eduRoute = require('./src/backend/Route/eduRoute');
app.use('/api/edu', eduRoute);

const mentalRoute = require('./src/backend/Route/mentalRoute');
app.use('/api/mental', mentalRoute);

const taskRoute = require('./src/backend/Route/taskRoute');
app.use('/api/seekassist', taskRoute);

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"))
})

//start the app by listening on default port
app.listen(process.env.PORT || 8080);
