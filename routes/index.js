let data = require('../data.json');

/*
 * GET browse or home page.
 */

exports.view = function(req, res){
  res.render('index', data);
};
