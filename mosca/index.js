var mosca = require('mosca');
var Config = require('config');

var ascoltatore = {
    type: 'mongo',
    url: 'mongodb://' + Config.get('db.host') + ':' + Config.get('db.port') +
        '/' + Config.get('db.name'),
    pubsubCollection: Config.get('db.collection'),
    mongo: {}
};

var settings = {
    port: Config.get('server.port'),
    backend: ascoltatore,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: ascoltatore.url
    }
};

var server = new mosca.Server(settings);

module.exports = server;
