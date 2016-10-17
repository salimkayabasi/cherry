const express = require('express');

module.exports = exports = (app, cb) => {
  const router = express.Router(); // eslint-disable-line new-cap

  app.use(router);
  cb(null, app);
};
