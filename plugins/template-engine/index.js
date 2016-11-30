const vision = require('vision');

function register(server, options, next) {

    server.register(vision, (err) => {
        if (err) {
            throw err;
        }

        next();
    });


}

register.attributes = {
    name: "template-engine"
};

module.exports = register;
