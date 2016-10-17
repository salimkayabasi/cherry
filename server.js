const config = require('config');

if (config.newrelic.key) {
  require('newrelic');
}
require('./app/')();

process.on('uncaughtException', (err) => {
  const log = require('kapgel-logger')(module);

  log.error('uncaughtException', err);
});
