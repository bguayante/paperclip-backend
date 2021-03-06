const mongoose = require('../db/connection');

const LinkSchema = new mongoose.Schema({
	item: {
		ref: 'Item',
		type: mongoose.Schema.Types.ObjectId,
		autopopulate: true,
	},
	need: {
		ref: 'Need',
		type: mongoose.Schema.Types.ObjectId,
		autopopulate: true,
	},
	cycle: {
		ref: 'Cycle',
		type: mongoose.Schema.Types.ObjectId,
	},
	confirmed: Number,
});
LinkSchema.plugin(require('mongoose-autopopulate'));

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
