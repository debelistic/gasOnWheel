var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.view(req, res);
  var locals = res.locals;

  locals.section = 'store';

  view.query('products', keystone.list('Product').model().find());

  view.render('products');
}