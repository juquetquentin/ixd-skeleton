let data = require('./data.js');

/*
 * GET profile page.
 */

exports.view = function(req, res){
  res.render('profile', data);
};
