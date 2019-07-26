var keystone = require('keystone');
var Types = keystone.Field.Types;

var Order = new keystone.List('Order', {
	nocreate: true,
	noedit: true,
});

Order.add({
	customer: { type: Types.Relationship, ref: 'User', many: false, index: true, initial: true },
	products: { type: Types.Relationship, ref: 'Product', many: true, index: true, required: true, initial: true },
});

Order.defaultSort = '-createdAt';
Order.defaultColumns = 'customer, products';

// var deepPopulate = require('mongoose-deep-populate')(keystone.mongoose);
// Order.schema.plugin(deepPopulate);
Order.register();
