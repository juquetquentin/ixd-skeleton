/*
 * GET profile page.
 */

exports.updateProfile = function (req, res) {
  var fs = require('fs');
  var fileName = '../data.json';
  var file = require(fileName);
  console.log(req.body);
  if( req.body.email )
    file.email = req.body.email;
  if( req.body.password )
    file.password = req.body.password;
  if( req.body.university )
    file.universityName = req.body.university;
  if( req.body.language1 )
    file.language = req.body.language1;
  fs.writeFileSync(fileName, JSON.stringify(file));
  var data = require('../data.json');
  res.redirect('/');
};

exports.view = function(req, res){
  let data = require('../data.json');
  res.render('profile', data);
};
