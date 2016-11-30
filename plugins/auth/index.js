var Config = require('config');
var JWT = require('hapi-auth-jwt2');

var validate = function() {

};

function register(server, options, next) {

    server.register(JWT, (err) => {
        if(err) {
            throw err;
        }
    });

    server.auth.strategy(Config.get('auth.driver'),
        Config.get('auth.driver'), {
            key: Config.get('auth.secretWord'),
            validateFunc: validate,
            verifyOptions: {
                algorithms: Config.get('auth.algorithms')
            }
        });

    next();

}

register.attributes = {
    name: "auth"
};

module.exports = register;
