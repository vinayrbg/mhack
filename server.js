const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//start express
const app = express();
const router = express.Router();

var port = process.env.PORT || 8000;

// var uri=process.env.URI;
console.info("Application Environment : " + process.env.ENV);
db_url = 'mongodb://vinaymiracle:test1234@ds151086.mlab.com:51086/hubblehelper'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//Declare and import


app.get('/', function (req, res) {
    console.log("hello")
    res.send("Welcome to Hubble Helper server");
});
app.use('/api', router);
router.use('/timesheet', require('./app/routes/timesheet.routes'));
router.use('/auth', require('./app/routes/login.routes'));


//DB connection
mongoose.connect(db_url,
    {
        connectTimeoutMS: 5000,
        useNewUrlParser: true
    }
);
//if conenction fails
mongoose.connection.on('error', (err) => {
    console.error(err.message);

});
//once successfull
mongoose.connection.once('open', () => {
    console.info("Connected to the DB successfully ");
});
const server = exports.server = require('http').createServer(app);
server.listen(port, () => {
    console.log("Started listening on : " + port);
});

