var appConfig = require('./config');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var dotenv = require('dotenv');
dotenv.config();


var smtpTransport = nodemailer.createTransport("SMTP", {

    service: 'Gmail',
    auth: {
        user: 'jenith1999.jj@gmail.com',
        pass: 'jenith1999'
    }
});

app.get('/contact', function (req, res) {
    res.render('contact');
});



app.get('/send', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

   // console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});
var server_port = process.env.PORT || appConfig.server_port;
var session_secret = process.env.SESSION_SECRET || appConfig.session_secret;
var db_user = process.env.DB_USER || appConfig.db_user;
var db_pass = process.env.DB_PASS || appConfig.db_pass;
var connection_string = appConfig.connection_string;
//console.log(connection_string);
//process.env.DB_STR || appConfig.connection_string;
mongoose.connect(connection_string, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var server = app.listen(server_port, function(){
    console.log('Listening on port %d',server_port);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
    secret: session_secret,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs');

var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.set('view engine','ejs');

var index_route = require('./routes/index');
var admin_route = require('./routes/admin');
var problem_route = require('./routes/problem');
var api_route = require('./routes/api');

app.use('/', index_route);
app.use('/admin', admin_route);
app.use('/problems', problem_route);
app.use('/api', api_route);
app.get('/mcq',function(req,res) {
    res.render('go');
    var fullUrl = req.originalUrl;
});
app.get('/result', function (req, res) {
    res.render('result');
});

app.get('/adminmcq', function (req, res) {
    res.render('adminmcq');
});
app.get('/hello',function(req,res){
    res.render('problems');
});




