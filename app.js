
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var profile = require('./routes/profile');
var signout = require('./routes/signout');
var help = require('./routes/help');
var playback = require('./routes/playback');
var liveplayback = require('./routes/liveplayback');
var signin = require('./routes/signin');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/signin', signin.view);
app.get('/', index.view);
app.get('/playback', playback.view);
app.get('/liveplayback', liveplayback.view);
app.get('/help', help.view);
app.get('/signout', signout.view);
app.get('/profile', profile.view);

//app.post('/profile', profile.updateProfile);

app.post('/profile', function(req, res) {
  let data = require('./data.json');
  var fs = require('fs');
  var fileName = './data.json';
  var file = require(fileName);
  console.log(req.body);
  if( req.body.email )
    data.email = req.body.email;
  if( req.body.password )
    data.password = req.body.password;
  if( req.body.university )
    data.universityName = req.body.university;
  if( req.body.language1 )
    data.language = req.body.language1;
  fs.writeFileSync(fileName, JSON.stringify(file));
  res.render('index', data);
});
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
