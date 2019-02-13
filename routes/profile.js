let data = require('../data.json');

/*
 * GET profile page.
 */

exports.updateProfile = function (req, res) {
  var fs = require('fs');
  var fileName = '../data.json';
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
  res.render('index');
};

exports.view = function(req, res){
  let data = require('../data.json');
  res.render('profile', data);
};
