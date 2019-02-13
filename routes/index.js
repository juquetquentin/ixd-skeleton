/*
 * GET browse or home page.
 */

exports.view = function(req, res){
  let data = require('../data.json');
  res.render('index', data);
};
