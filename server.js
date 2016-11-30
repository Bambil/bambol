'use strict;'

const Hapi = require('hapi');
const Config = require('config');
const Path = require('path');

const User = require('./models/user');
const Serial = require('./models/serial.js');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public/')
            }
        }
    }
});

server.connection({
    port: Config.get('server.port')
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
});
server.register(require('./plugins'), (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: {
            html: require('handlebars')
        },

        path: __dirname + '/resources/views',
        layout: Config.get('view.layouts')
    });

    const handler = function(request, reply) {
        reply.view('user', {
            message: 'Hello World'
        });
    };

    server.route({
        method: 'GET',
        path: '/',
        handler: handler
    });

    server.route(Serial.routes);
    server.route(User.routes);
    server.route({
        method: 'GET',
        path: '/js/app.js',
        handler: function(request, reply) {
            reply.file('js/app.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/css/app.css',
        handler: function(request, reply) {
            reply.file('css/app.css');
        }
    });

});
