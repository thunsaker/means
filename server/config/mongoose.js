var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('multivision db opened');
	});

	var userSchema = mongoose.Schema({
		first: String,
		last: String,
		username: String
	});

	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			User.create({first:'Tommy',last:'Hunsaker',username:'tommy'});
			User.create({first:'Cameron',last:'Hunsaker',username:'cameroni'});
			User.create({first:'Flynn', last:'Hunsaker',username:'flynnigan'});
		}
	});
}