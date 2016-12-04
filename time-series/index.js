const Influx = require('influx');
const Config = require('config');

const client = new Influx.InfluxDB({
    database: Config.get('timeSeries.name'),
    host: Config.get('timeSeries.host'),
    port: Config.get('timeSeries.port')
});
