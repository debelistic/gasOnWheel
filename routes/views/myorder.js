var keystone = require('keystone');
var Order = keystone.list('Order');
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	if (req.user === undefined) {
		view.render('errors/404');
		return;
	}
	console.log('loggedin user =' + req.user.email);

	var locals = res.locals;

	// Set locals
	locals.section = 'myorders';
	locals.title = 'MyOrders';


	view.on('init', function (next) {
		Order.paginate({
			page: req.query.page || 1,
			perPage: 2,
			maxPages: 10,
		})
	.where('customer', req.user.id)
	.sort('-publishedDate')
	.exec(function (err, res) {
		locals.Orders = res;
		next(err);
	});
	});
	// Render the view
	view.render('myorders');

};
