var config = require('./config');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var log = require('./libs/log')(module);
var morgan = require('morgan');
var colors = require('colors');
var routes = require('./routes/index');
var api = require('./routes/api');
var orders = require('./routes/orders');
var approve = require('./routes/approve');
var confirm = require('./routes/confirm');
var review = require('./routes/review');


var user = require('./models/user.js');
var mail = require('./routes/mailer.js');
var flash = require('connect-flash');

var mongoose = require('mongoose');
var dbUrl = config.get('db:connection') + '/' + config.get('db:name');
var db = mongoose.connection;

mongoose.connect(dbUrl, function(err) {
    if(err) {
        log.debug('Connection error'.red, err);
    } else {        
        log.info('Connection with barber db was successful..'.yellow);

        app.listen(app.get('port'), function() {  
            log.info('Starting up Express http-server, listening on port '.yellow + (app.get('port')).toString().underline.cyan + '..');
            log.info('Hit CTRL-C to stop the server'.grey);
	});
    }
});

var app = express();
app.set('port', process.env.PORT || config.get('port'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(morgan('dev'));

//add needed part for passport

var session = require('express-session');
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: 'keyboard cat' }));

var passport = require('passport');
var passp = require('./config/passportConfig')
passp(app,passport,flash)


var mustAuthenticatedMw = function (req, res, next){
    req.isAuthenticated()
	? next()
	: res.redirect('/login');
};

app.get('/admin', function (req, res, next) {
    req.isAuthenticated()
	? res.redirect('/barbersgrid')
	: res.redirect('/login');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/start', routes);
app.use('/api', api);
app.use('/orders', mustAuthenticatedMw, orders);
app.use('/approve', approve);
app.use('/confirm', confirm);
app.use('/sendEmail', mail);
app.use('/reviews', mustAuthenticatedMw, review);

app.get('/endpoints', function(req, res){
    var route, routes = [];

    app._router.stack.forEach(function(middleware){  
	if(middleware.route){ // routes registered directly on the app
            routes.push(middleware.route);
	} else if(middleware.name === 'router'){ // router middleware       
            middleware.handle.stack.forEach(function(handler){          
		route = handler.route;
		route && routes.push(route);
            });
	}
    });

    res.render('endpoints', { routes: routes });  
});

app.all('/*', function(req, res, next) {    
    if(req.user) {        
        res.cookie('user', JSON.stringify({'id': req.user.id}), { httpOnly: false } );
    } else {
        res.clearCookie("user");
    }

    res.redirect('/start');
});

app.use(express.static(__dirname + '/public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	    message: err.message,
	    error: err
	});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
	message: err.message,
	error: {}
    });
});

module.exports = app;







