const Config = require('config');

var User = require('./user.js');
var routes = require('./routes.js');

var authRoutes = User.routes;

if (Config.get('auth.enabled')) {
    for (index in authRoutes) {
        authRoutes[index].config = {
            'auth': config.get('auth.driver')
        };
    }
}

User.routes = routes;
module.exports = User;
