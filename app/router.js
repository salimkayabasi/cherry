const express = require('express');
const fs = require('fs');
const path = require('path');

const loadController = function (dir) {
  const controllers = {};
  fs.readdirSync(dir).forEach((file) => {
    if (file.match(/\.js$/)) {
      const ctrlPath = path.resolve(`${dir}/${file}`);
      /* eslint-disable */
      controllers[file.replace('.js', '')] = require(ctrlPath);
      /* eslint-enable */
    }
  });
  return controllers;
};

module.exports = exports = (app, cb) => {
  const controllers = loadController(`${process.cwd()}/app/controller`);

  const router = express.Router();

  router.route('*').get((req, res, next) => {
    if (req.headers.accept.indexOf('text/html') !== -1) {
      controllers.site.index(req, res, next);
    } else {
      next();
    }
  });

  app.use(router);
  cb(null, app);
};
