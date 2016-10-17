var config = require('config');
if (config.newrelic.key) {
    require('newrelic');
}
require(process.cwd() + '/app/')();
process.on('uncaughtException', function (err) {
    var log = require('kapgel-logger')(module);
    log.error('uncaughtException', err);
});