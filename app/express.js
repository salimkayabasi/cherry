const express = require('express');

module.exports = exports = (app, cb) => {
  app.use(express.static('client/build/bundled/'));
  cb(null, app);
};
