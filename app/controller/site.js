const config = require('config');

exports.index = function (req, res) {
  let path = `${process.cwd()}/client/`;
  if (config.status !== 'local') {
    path += 'build/bundled/';
  }
  res.sendFile(`${path}/index.html`);
};
