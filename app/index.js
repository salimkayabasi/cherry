const async = require('async');
const config = require('config');
const log = require('kapgel-logger')(module);

module.exports = exports = (callback) => {
  const app = require('express')();
  async.seq(
    (cb) => {
      cb(null, app);
    }
  )((err, server) => {
    if (err) {
      throw err;
    }
    if (callback) {
      log.info('app started for testing');
      callback(app);
    } else {
      const port = config.server.port;
      server.listen(port, (error) => {
        if (error) {
          throw error;
        }
        log.info('app server listening on port', port);
        log.info('app status', config.status);
      });
    }
  });
};
