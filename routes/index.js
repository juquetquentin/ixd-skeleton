let data = require('./data.js');

/*
 * GET browse or home page.
 */

exports.view = function(req, res){
  res.render('index', data);
};
