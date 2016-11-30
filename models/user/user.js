var mongoose = require('mongoose');
var config = require('config');

var Schema = mongoose.Schema;

var db = 'mongodb://' + config.get('db.host') + ':' + config.get('db.port') +
    '/' + config.get('db.name');

mongoose.connect(db);

var userSchema = new Schema({
    username: String,
    serials: [{
        barcode: String,
        expiration: Date
    }]
});

var User = mongoose.model('User', userSchema);
var authRoutes = User.routes;

if (config.get('auth.enabled')) {
    for (index in authRoutes) {
        authRoutes[index].config = {
            'auth': config.get('auth.driver')
        };
    }
}

module.exports = User;
