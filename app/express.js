const config = require('config');
const express = require('express');

module.exports = exports = (app, cb) => {
  let path = 'client/';
  if (config.status !== 'local') {
    path += 'build/bundled/';
  }
  app.use(express.static(path));
  cb(null, app);
};
