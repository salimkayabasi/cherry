var async = require('async');
var config = require('config');
var log = require('kapgel-logger')(module);

module.exports = exports = function (callback) {
    var app = require('express')();
    async.seq(
        function (cb) {
            cb(null, app);
        }
    )(function (err, server) {
        if (err) {
            throw err;
        }
        if (callback) {
            log.info('app started for testing');
            callback(app);
        } else {
            var port = config.server.port;
            server.listen(port, function (error) {
                if (error) {
                    throw error;
                }
                log.info('app server listening on port', port);
                log.info('app status', config.status);
            });
        }
    });
};